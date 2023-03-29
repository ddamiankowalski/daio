import { NgIf } from "@angular/common";
import { Component, HostBinding, Input } from "@angular/core";
import { IDaioButtonColor } from "../../interfaces/daio-button-configuration.interface";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";
import { DaioButtonCommonComponent } from "../daio-button-common/daio-button.common";
import { DaioButtonLoaderComponent } from "../daio-button-loader/daio-button-loader.component";

@Component({
    standalone: true,
    selector: '[daioFlatButton]',
    templateUrl: './daio-button-flat.component.html',
    providers: [DaioRendererService],
    imports: [DaioButtonLoaderComponent, NgIf]
})
export class DaioButtonFlatComponent extends DaioButtonCommonComponent {
    @HostBinding('class') buttonClass = 'daio-button-flat';

    constructor(
      protected override renderer: DaioRendererService
    ) {
      super(renderer);
    }
    
    @Input() set loading(isLoading: boolean) {
        isLoading
          ? this.addClass('daio-button--loading')
          : this.removeClass('daio-button--loading');
    
          this.isLoading = isLoading;
    }

    @Input() set color(value: IDaioButtonColor) {
      this.addClass(`daio-button-flat--` + value);
    }
}