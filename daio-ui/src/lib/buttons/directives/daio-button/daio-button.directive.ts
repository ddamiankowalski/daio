import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
    standalone: true,
    selector: '[daioButton]'
})
export class DaioButtonDirective {
    private buttonHTMLElement?: HTMLButtonElement;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this.getButtonHTMLElement();
    }

    @HostBinding('class') buttonClass = 'daio-button';

    @Input() set disabled(isDisabled: boolean) {
        isDisabled ? this.renderer.addClass(this.buttonHTMLElement, 'daio-button--disabled') : this.renderer.removeClass(this.buttonHTMLElement, 'daio-button--disabled');
    }

    private getButtonHTMLElement(): void {
        if(!(this.elementRef.nativeElement instanceof HTMLButtonElement)) {
            throw new Error('daioButton directive cannot be added to an element which is not a button!')
        }
        this.buttonHTMLElement = this.elementRef.nativeElement;
    }
}