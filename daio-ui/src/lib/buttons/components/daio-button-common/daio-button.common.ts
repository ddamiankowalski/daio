import { IDaioButtonColor } from "../../interfaces/daio-button-configuration.interface";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";
import { AfterViewInit, ChangeDetectorRef, Directive, Input, OnDestroy } from "@angular/core";
import { DaioMenuComponent } from "../../../menu";

@Directive()
export abstract class DaioButtonCommonComponent implements AfterViewInit, OnDestroy {
    protected isLoading = false;
    protected menu?: DaioMenuComponent;

    @Input() set menuTrigger(menu: DaioMenuComponent) {
        this.menu = menu;
        this.menu.hostElement = this.renderer.getElement();
    }

    constructor(
        protected renderer: DaioRendererService,
        protected cdRef: ChangeDetectorRef
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
        if(this.menu && this.menu.templateRef) {
            this.renderer.createMenuListeners(
                this.menu.toggleMenu.bind(this.menu)
            );
        }
    }

    ngOnDestroy(): void {
        if(this.menu && this.menu.templateRef) {
            this.renderer.removeMenuListeners(
                this.menu.toggleMenu.bind(this.menu)
            );
        }
      }
}