import { ElementRef, EmbeddedViewRef, Injectable, TemplateRef } from "@angular/core";
import { DaioOverlayComponent } from "../components/daio-overlay.component";

@Injectable({
    providedIn: 'root'
})
export class DaioOverlayService {
    private overlay!: DaioOverlayComponent;
    private overlayElement!: ElementRef;

    public setOverlayElement(overlay: DaioOverlayComponent) {
        this.overlay = overlay;
        this.overlayElement = overlay.elementRef;
    }

    public createOverlayTemplate(templateRef: TemplateRef<unknown>): EmbeddedViewRef<unknown> {
        return this.overlay.outletRef.createEmbeddedView(templateRef);
    }
}