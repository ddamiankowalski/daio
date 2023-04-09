import {
  AfterViewInit,
  ChangeDetectorRef,
    Component,
    HostBinding,
    Input,
  } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { DaioRendererService } from '../../../common/services/daio-renderer.service';
  import { DaioButtonCommonComponent } from '../daio-button-common/daio-button.common';
  import { IDaioButtonColor } from '../../interfaces/daio-button-configuration.interface';
import { DaioButtonLoaderComponent } from '../daio-button-loader/daio-button-loader.component';
import { DaioIconComponent } from '../../../icons/components/daio-icon/daio-icon.component';
  
  @Component({
    standalone: true,
    selector: 'button[daioIconButton]',
    templateUrl: './daio-button-icon.component.html',
    providers: [DaioRendererService],
    imports: [
        DaioButtonLoaderComponent,
        DaioIconComponent,
        CommonModule
    ]
  })
  export class DaioButtonIconComponent extends DaioButtonCommonComponent implements AfterViewInit {
    @HostBinding('class') buttonClass = 'daio-button-icon';
  
    constructor(
      protected override renderer: DaioRendererService,
      protected override cdRef: ChangeDetectorRef
    ) {
      super(renderer, cdRef);
    }

    @Input() iconName?: string;
  
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
  