import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { DaioRendererService } from '../../../common/services/daio-renderer.service';
import { DaioButtonLoaderComponent } from '../daio-button-loader/daio-button-loader.component';
import { DaioButtonCommonComponent } from '../daio-button-common/daio-button.common';
import { IDaioButtonColor } from '../../interfaces/daio-button-configuration.interface';
import { DaioOverlayService } from '../../../overlay/services/daio-overlay.service';

@Component({
  standalone: true,
  selector: 'button[daioButton]',
  templateUrl: './daio-button.component.html',
  providers: [DaioRendererService],
  imports: [DaioButtonLoaderComponent, NgIf]
})
export class DaioButtonComponent extends DaioButtonCommonComponent {
  @HostBinding('class') buttonClass = 'daio-button';

  constructor(
    protected override renderer: DaioRendererService,
    protected override cdRef: ChangeDetectorRef,
    protected override overlay: DaioOverlayService

  ) {
    super(renderer, cdRef, overlay);
  }

  @Input() set loading(isLoading: boolean) {
    isLoading
      ? this.addClass('daio-button--loading')
      : this.removeClass('daio-button--loading');

      this.isLoading = isLoading;
  }

  @Input() set color(value: IDaioButtonColor) {
    this.addClass(`daio-button--` + value);
  }
}
