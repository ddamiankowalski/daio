import {
  AfterViewInit,
  Directive,
  HostBinding,
  Input,
} from '@angular/core';
import { DaioButtonRendererService } from '../../services/daio-button-renderer.service';

@Directive({
  standalone: true,
  selector: '[daioButton]',
  providers: [DaioButtonRendererService]
})
export class DaioButtonDirective implements AfterViewInit {
  @HostBinding('class') buttonClass = 'daio-button';

  constructor(
    private renderer: DaioButtonRendererService
  ) {
    this.renderer.setHTMLElements();
  }

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
