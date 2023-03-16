import { ElementRef, Injectable, Renderer2 } from "@angular/core";

@Injectable()
export class DaioButtonRendererService {
    constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

    private buttonHTMLElement?: HTMLButtonElement;
    private textHTMLElement?: HTMLElement; 

    public setHTMLElements(): void {
        this.buttonHTMLElement = this.elementRef.nativeElement;
    }

    public addWrapper(): void {
        this.validateNodes();
        this.createTextElement();
        this.replaceTextElement();
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

    private createTextElement(): void {
        this.textHTMLElement = this.renderer.createElement('div');
        this.renderer.addClass(this.textHTMLElement, 'daio-button__text');
    }

    private replaceTextElement(): void {
        this.renderer.appendChild(this.textHTMLElement,  this.renderer.createText(this.elementRef.nativeElement.innerHTML));
        this.elementRef.nativeElement.innerHTML = '';
        this.renderer.appendChild(this.elementRef.nativeElement, this.textHTMLElement);
    }

    private validateNodes(): void {
        if(!(this.elementRef.nativeElement instanceof HTMLButtonElement)) {
            throw new Error('daioButton directive cannot be added to an element which is not a button!')
        }

        this.elementRef.nativeElement.childNodes.forEach(node => {
            if(node.nodeType !== Node.TEXT_NODE) {
                throw new Error('daioButton directive cannot have more than one text node')
            }
        })
    }
}