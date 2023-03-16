import { ElementRef, Renderer2 } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { DaioButtonRendererService } from "./daio-button-renderer.service";

describe('DaioButtonRendererService', () => {
    let buttonRendererService: DaioButtonRendererService;
    let expectedElementRef: ElementRef;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                DaioButtonRendererService, 
                Renderer2,
                {
                    provide: ElementRef,
                    useValue: new ElementRef(document.createElement('button'))
                } 
            ]
       }) 

       buttonRendererService = TestBed.inject(DaioButtonRendererService);
       expectedElementRef = new ElementRef(document.createElement('button'));
    });

    it('initializes successfully', () => {
        expect(buttonRendererService).toBeDefined();
    });

    it('sets the html element instance to the service buttonhtmlelement', () => {
        buttonRendererService.setHTMLElements();
        expect(buttonRendererService['buttonHTMLElement']).toEqual(expectedElementRef.nativeElement);
    });
});