import { AfterViewInit, Directive, Input } from "@angular/core";
import { DaioButtonRendererService } from "../../services/daio-renderer.service";

@Directive()
export class DaioButtonCommon implements AfterViewInit {
    constructor(
        private renderer: DaioButtonRendererService
    ) {}

    @Input() set disabled(isDisabled: boolean) {
        isDisabled
            ? this.addClass('daio-button--disabled')
            : this.removeClass('daio-button--disabled');
    }

    @Input() set loading(isLoading: boolean) {
        this.renderer.setLoading(isLoading);
    
        isLoading
          ? this.addClass('daio-button--loading')
          : this.removeClass('daio-button--loading');
    }

    public ngAfterViewInit(): void {
        this.renderer.addWrapper();
    }

    private addClass(name: string): void {
        this.renderer.addClass(name);
      }
    
    private removeClass(name: string): void {
        this.renderer.removeClass(name);
    }
}