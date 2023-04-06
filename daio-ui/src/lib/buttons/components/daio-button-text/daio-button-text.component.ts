import { Component, HostBinding, Input } from "@angular/core";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";
import { DaioButtonCommonComponent } from "../daio-button-common/daio-button.common";
import { IDaioButtonColor } from "../../interfaces/daio-button-configuration.interface";

@Component({
    standalone: true,
    selector: 'button[daioTextButton]',
    templateUrl: './daio-button-text.component.html',
    providers: [DaioRendererService]
})
export class DaioButtonTextComponent extends DaioButtonCommonComponent {
    @HostBinding('class') buttonClass = 'daio-button-text';
    
    @Input() set loading(isLoading: boolean) {
        isLoading
        ? this.addClass('daio-button--loading')
        : this.removeClass('daio-button--loading');
  
        this.isLoading = isLoading;
    }
    @Input() set color(value: IDaioButtonColor) {
        this.addClass(`daio-button--` + value);
    }

    constructor(
        protected override renderer: DaioRendererService
      ) {
        super(renderer);
    }
}