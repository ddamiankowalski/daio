import { ElementRef, Injectable, Renderer2 } from "@angular/core";

@Injectable()
export class DaioButtonRendererService {
    constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

    private buttonHTMLElement?: HTMLButtonElement;
    private textHTMLElement?: HTMLElement; 
    private loadingHTMLElement?: HTMLDivElement;
    private elementLoading?: boolean;

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

    public setLoading(loadingValue: boolean) {
        loadingValue ? this.createLoadingElements() : this.removeLoadingElements();
        this.elementLoading = loadingValue;
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

    private createLoadingElements(): void {
        this.loadingHTMLElement = this.renderer.createElement('div');
        this.renderer.addClass(this.loadingHTMLElement, 'daio-button__loader');
        this.renderer.appendChild(this.elementRef.nativeElement, this.loadingHTMLElement);

        for(let spinnerNode = 0; spinnerNode < 4; spinnerNode++) {
            this.renderer.appendChild(this.loadingHTMLElement, this.renderer.createElement('div'));
        }
    }

    private removeLoadingElements(): void {
        if(!this.elementLoading === false) {
            this.renderer.removeChild(this.buttonHTMLElement, this.loadingHTMLElement);
        }
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