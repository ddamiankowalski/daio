import { NgIf } from "@angular/common";
import { Component, HostBinding, Input } from "@angular/core";
import { IDaioButtonColor } from "../../interfaces/daio-button-configuration.interface";
import { DaioRendererService } from "../../services/daio-renderer.service";
import { DaioButtonCommonComponent } from "../daio-button-common/daio-button.common";
import { DaioButtonLoaderComponent } from "../daio-button-loader/daio-button-loader.component";

@Component({
    standalone: true,
    selector: '[daioBasicButton]',
    templateUrl: './daio-button-basic.component.html',
    providers: [DaioRendererService],
    imports: [DaioButtonLoaderComponent, NgIf]
})
export class DaioButtonBasicComponent extends DaioButtonCommonComponent {
    @HostBinding('class') buttonClass = 'daio-button-basic';

    constructor(
        protected override renderer: DaioRendererService
    ) {
        super(renderer);
    }

    @Input() set loading(isLoading: boolean) {
        throw new Error('isLoading input is not implemented for DaioButtonBasicComponent');
      }
    
      @Input() set color(value: IDaioButtonColor) {
        this.addClass(`daio-button--` + value);
      }
}  