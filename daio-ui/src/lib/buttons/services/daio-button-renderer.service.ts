import { ElementRef, Injectable, Renderer2 } from "@angular/core";

@Injectable()
export class DaioButtonRendererService {
    constructor(private renderer: Renderer2) {}

    private buttonHTMLElement?: HTMLButtonElement;
    private textHTMLElement!: HTMLElement; 

    public setHTMLElements(elementRef: ElementRef): void {
        this.buttonHTMLElement = elementRef.nativeElement;
    }

    public addWrapper(elementRef: ElementRef): void {
        this.validateNodes(elementRef);
        this.textHTMLElement = this.renderer.createElement('div');
        const text = this.renderer.createText(elementRef.nativeElement.innerHTML);
        elementRef.nativeElement.innerHTML = '';
        this.renderer.appendChild(this.textHTMLElement, text);
        this.renderer.addClass(this.textHTMLElement, 'daio-button__text');
        this.renderer.appendChild(elementRef.nativeElement, this.textHTMLElement);
    }

    public addClass(className: string): void {
        if(this.buttonHTMLElement) {
            this.renderer.addClass(this.buttonHTMLElement, className);
        }
    }

    public removeClass(className: string): void {
        if(this.buttonHTMLElement) {
            this.renderer.removeClass(this.buttonHTMLElement, className);        
        }
    }

    private validateNodes(elementRef: ElementRef): void {
        if(!(elementRef.nativeElement instanceof HTMLButtonElement)) {
            throw new Error('daioButton directive cannot be added to an element which is not a button!')
        }

        elementRef.nativeElement.childNodes.forEach(node => {
            if(node.nodeType !== Node.TEXT_NODE) {
                throw new Error('A content can only include text')
            }
        })
    }
}