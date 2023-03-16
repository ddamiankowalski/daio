import { ElementRef, Renderer2 } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { DaioButtonRendererService } from "./daio-button-renderer.service";


describe('DaioButtonRendererService', () => {
    let buttonRendererService: DaioButtonRendererService;
    let expectedElementRef: ElementRef;

    const addClassMock = jest.fn();
    const removeClassMock = jest.fn();

    const renderer2Mock: Partial<Renderer2> = {
        addClass: addClassMock,
        removeClass: removeClassMock
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                DaioButtonRendererService, 
                {
                    provide: Renderer2,
                    useValue: renderer2Mock
                },
                {
                    provide: ElementRef,
                    useValue: new ElementRef(document.createElement('button'))
                } 
            ]
       }) 

       buttonRendererService = TestBed.inject(DaioButtonRendererService);
       expectedElementRef = new ElementRef(document.createElement('button'));
       buttonRendererService.setHTMLElements();
    });

    it('initializes successfully', () => {
        expect(buttonRendererService).toBeDefined();
    });

    it('sets the html button instance to the service buttonhtmlelement', () => {
        expect(buttonRendererService['buttonHTMLElement']).toEqual(expectedElementRef.nativeElement);
    });

    it('adds the class to the host button element', () => {
        buttonRendererService.addClass('testclass');
        expect(renderer2Mock.addClass).toHaveBeenCalled();
        expect(addClassMock.mock.calls[0][0]).toEqual(expectedElementRef.nativeElement);
        expect(addClassMock.mock.calls[0][1]).toBe('testclass');
    });
});