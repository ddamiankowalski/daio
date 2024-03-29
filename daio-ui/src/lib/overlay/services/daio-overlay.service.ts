import { ComponentRef, EmbeddedViewRef, Injectable, TemplateRef, Type } from "@angular/core";
import { DaioOverlayComponent } from "../components/daio-overlay.component";

@Injectable({
    providedIn: 'root'
})
export class DaioOverlayService {
    private overlay!: DaioOverlayComponent;

    public setOverlayElement(overlay: DaioOverlayComponent) {
        this.overlay = overlay;
    }

    public createOverlayTemplate(templateRef: TemplateRef<unknown>): EmbeddedViewRef<unknown> {
        return this.overlay.outletRef.createEmbeddedView(templateRef);
    }

    public createOverlayComponent<T>(componentType: Type<T>): ComponentRef<T> {
        return this.overlay.outletRef.createComponent(componentType);
    }
}