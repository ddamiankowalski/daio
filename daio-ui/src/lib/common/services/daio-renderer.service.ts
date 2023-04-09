import { ElementRef, Injectable, NgZone, Renderer2 } from "@angular/core";

@Injectable()
export class DaioRendererService {
    constructor(
        private renderer: Renderer2, 
        private elementRef: ElementRef,
        private ngZone: NgZone
    ) {}

    public addClass(className: string): void {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    }

    public removeClass(className: string): void {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    }

    public focusElement(): void {
        this.elementRef.nativeElement.focus();
    }

    public getElement(): ElementRef {
        return this.elementRef;
    }

    public createMenuListeners(callback: (event: Event) => void): void {
        this.ngZone.runOutsideAngular(() => {
            (this.elementRef.nativeElement as HTMLElement).addEventListener('click', callback);
        })
    }

    public removeMenuListeners(callback: (event: Event) => void): void {
        (this.elementRef.nativeElement as HTMLElement).removeEventListener('click', callback);
    }
}