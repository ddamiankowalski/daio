import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { DaioButtonCommonComponent } from "../daio-button-common/daio-button.common";
import { IDaioButtonColor } from "../../interfaces/daio-button-configuration.interface";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";

@Component({
    standalone: true,
    selector: 'button[daioMenuButton]',
    templateUrl: './daio-button-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class DaioButtonMenuComponent extends DaioButtonCommonComponent {
    @HostBinding('class') buttonMenuClass = 'daio-button-menu';

    constructor(
        protected override renderer: DaioRendererService,
        protected override cdRef: ChangeDetectorRef,
      ) {
        super(renderer, cdRef);
      }
      
      @Input() set loading(isLoading: boolean) {
          isLoading
            ? this.addClass('daio-button--loading')
            : this.removeClass('daio-button--loading');
      
            this.isLoading = isLoading;
      }
  
      @Input() set color(value: IDaioButtonColor) {
        throw new Error(`DAIO_ERROR: Cannot set ${value} color for DaioButtonMenuComponent`);
      }
}