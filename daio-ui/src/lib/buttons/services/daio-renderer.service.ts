import { ElementRef, Injectable, Renderer2 } from "@angular/core";

@Injectable()
export class DaioRendererService {
    constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

    public addClass(className: string): void {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    }

    public removeClass(className: string): void {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    }
}