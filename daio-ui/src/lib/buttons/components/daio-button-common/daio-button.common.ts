import { IDaioButtonColor } from "../../interfaces/daio-button-configuration.interface";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";

export abstract class DaioButtonCommonComponent {
    protected isLoading = false;

    constructor(
        protected renderer: DaioRendererService
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
}