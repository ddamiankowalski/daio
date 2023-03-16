import { ElementRef, Renderer2 } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { DaioButtonRendererService } from "./daio-button-renderer.service";

describe('DaioButtonRendererService', () => {
    let buttonRendererService: DaioButtonRendererService;
    let elementRef: ElementRef;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [DaioButtonRendererService, Renderer2]
       }) 

       buttonRendererService = TestBed.inject(DaioButtonRendererService);
       elementRef = new ElementRef(document.createElement('div'));
    });

    it('initializes successfully', () => {
        expect(buttonRendererService).toBeDefined();
    });

    it('sets the html element instance to the service buttonhtmlelement', () => {
        buttonRendererService.setHTMLElements(elementRef);
        expect(buttonRendererService['buttonHTMLElement']).toBe(elementRef.nativeElement);
    });
});