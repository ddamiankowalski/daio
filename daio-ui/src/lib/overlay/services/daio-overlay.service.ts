import { Injectable, TemplateRef } from "@angular/core";
import { DaioOverlayComponent } from "../components/daio-overlay.component";

@Injectable({
    providedIn: 'root'
})
export class DaioOverlayService {
    private overlay?: DaioOverlayComponent;

    public setOverlayElement(overlay: DaioOverlayComponent) {
        this.overlay = overlay;
    }

    public createOverlayTemplate(templateRef: TemplateRef<unknown>): void {
        if(this.overlay && this.overlay.outletRef) {
            this.overlay.outletRef.createEmbeddedView(templateRef);
        }
    }
}