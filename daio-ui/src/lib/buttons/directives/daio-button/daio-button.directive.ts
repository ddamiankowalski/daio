import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input,
} from '@angular/core';
import { DaioButtonRendererService } from '../../services/daio-button-renderer.service';

@Directive({
  standalone: true,
  selector: '[daioButton]',
  providers: [DaioButtonRendererService],
})
export class DaioButtonDirective implements AfterViewInit {
  constructor(
    private elementRef: ElementRef,
    private renderer: DaioButtonRendererService
  ) {
    this.renderer.setHTMLElements(this.elementRef);
  }

  @HostBinding('class') buttonClass = 'daio-button';

  @Input() set disabled(isDisabled: boolean) {
    isDisabled
      ? this.addClass('daio-button--disabled')
      : this.removeClass('daio-button--disabled');
  }

  @Input() set loading(isLoading: boolean) {
    isLoading
      ? this.addClass('daio-button--loading')
      : this.removeClass('daio-button--loading');
  }

  public ngAfterViewInit(): void {
    this.renderer.addWrapper(this.elementRef);
  }

  private addClass(name: string): void {
    this.renderer.addClass(name);
  }

  private removeClass(name: string): void {
    this.renderer.removeClass(name);
  }
}
