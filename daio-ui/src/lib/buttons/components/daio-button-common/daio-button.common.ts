import { IDaioButtonColor } from "../../interfaces/daio-button-configuration.interface";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";
import { AfterViewInit, ChangeDetectorRef, Directive, Input } from "@angular/core";
import { DaioMenuComponent } from "../../../menu";
import { DaioOverlayService } from "../../../overlay/services/daio-overlay.service";

@Directive()
export abstract class DaioButtonCommonComponent implements AfterViewInit {
    protected isLoading = false;
    protected menu?: DaioMenuComponent;

    @Input() set menuTrigger(menu: DaioMenuComponent) {
        this.menu = menu;
    }

    constructor(
        protected renderer: DaioRendererService,
        protected cdRef: ChangeDetectorRef,
        protected overlay: DaioOverlayService
    ) {}

    abstract set loading(isLoading: boolean);
    abstract set color(value: IDaioButtonColor);

    protected addClass(name: string): void {
        this.renderer.addClass(name);
    }
    
    protected removeClass(name: string): void {
        this.renderer.removeClass(name);
    }

    protected focusButton(): void {
        this.renderer.focusElement();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.menu && this.menu.templateRef && this.overlay.createOverlayTemplate(this.menu.templateRef);
            this.cdRef.detectChanges();
        }, 300)
    }
}