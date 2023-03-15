import { AfterViewInit, Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
    standalone: true,
    selector: '[daioButton]'
})
export class DaioButtonDirective implements AfterViewInit {
    private buttonHTMLElement?: HTMLButtonElement;
    private textHTMLElement!: HTMLElement;
    private loadingAnimationRunning = false;

    constructor(
        private elementRef: ElementRef, 
        private renderer: Renderer2
    ) {
        this.getButtonHTMLElement();
    }

    @HostBinding('class') buttonClass = 'daio-button';

    @Input() set disabled(isDisabled: boolean) {
        isDisabled ? this.addClass('daio-button--disabled') : this.removeClass('daio-button--disabled');
    }

    @Input() set loading(isLoading: boolean) {
        isLoading ? this.addClass('daio-button--loading') : this.removeClass('daio-button--loading');
        Promise.resolve().then(() => this.startLoadingAnimation())
    }

    public ngAfterViewInit(): void {
        this.wrapInnerHTMLInDiv();
    }

    private addClass(name: string): void {
        this.renderer.addClass(this.buttonHTMLElement, name);
    }

    private removeClass(name: string): void {
        this.renderer.removeClass(this.buttonHTMLElement, name);
    }

    private getButtonHTMLElement(): void {
        if(!(this.elementRef.nativeElement instanceof HTMLButtonElement)) {
            throw new Error('daioButton directive cannot be added to an element which is not a button!')
        }
        this.buttonHTMLElement = this.elementRef.nativeElement;
    }

    private wrapInnerHTMLInDiv(): void {
        this.textHTMLElement = this.renderer.createElement('div');
        const text = this.renderer.createText(this.elementRef.nativeElement.innerHTML);
        this.elementRef.nativeElement.innerHTML = '';
        this.renderer.appendChild(this.textHTMLElement, text);
        this.renderer.addClass(this.textHTMLElement, 'daio-button__text');
        this.renderer.appendChild(this.elementRef.nativeElement, this.textHTMLElement);
    }

    private startLoadingAnimation(): void {
        try {
            this.loadingAnimationRunning = true;
            const keyframes = [ { transform: "rotate(0) scale(1)" }, { transform: "rotate(360deg) scale(0)" } ];
            const options = { duration: 2000 };
            //const animation = this.textHTMLElement.animate(keyframes, options);
            // console.log(animation);
            // animation.onfinish = () => {
            //     console.log('finised');
            //     this.loadingAnimationRunning = false;
            // }
        } catch (err) {
            new Error('An error occurred while trying to animate');
        }
    }
}