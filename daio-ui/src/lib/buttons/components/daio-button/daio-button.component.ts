import {
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { DaioRendererService } from '../../services/daio-renderer.service';
import { DaioButtonLoaderComponent } from '../daio-button-loader/daio-button-loader.component';
import { DaioButtonCommonComponent } from '../daio-button-common/daio-button.common';

@Component({
  standalone: true,
  selector: '[daioButton]',
  templateUrl: './daio-button.component.html',
  providers: [DaioRendererService],
  imports: [DaioButtonLoaderComponent, NgIf]
})
export class DaioButtonComponent extends DaioButtonCommonComponent {
  @HostBinding('class') buttonClass = 'daio-button';

  constructor(
    protected override renderer: DaioRendererService
  ) {
    super(renderer);
  }

  @Input() set disabled(isDisabled: boolean) {
    isDisabled
      ? this.addClass('daio-button--disabled')
      : this.removeClass('daio-button--disabled');
  }

  @Input() set loading(isLoading: boolean) {
    isLoading
      ? this.addClass('daio-button--loading')
      : this.removeClass('daio-button--loading');

      this.isLoading = isLoading;
  }
}
