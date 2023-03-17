import { DaioRendererService } from "../../services/daio-renderer.service";

export abstract class DaioButtonCommonComponent {
    protected isLoading = false;

    constructor(
        protected renderer: DaioRendererService
    ) {}

    abstract set disabled(isDisabled: boolean);
    abstract set loading(isLoading: boolean);

    protected addClass(name: string): void {
        this.renderer.addClass(name);
    }
    
    protected removeClass(name: string): void {
        this.renderer.removeClass(name);
    }
}