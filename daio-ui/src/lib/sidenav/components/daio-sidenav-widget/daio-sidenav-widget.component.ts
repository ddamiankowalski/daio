import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaioSidenavService } from '../../services/daio-sidenav.service';
import { Subscription } from 'rxjs';
import { DaioIconComponent } from '../../../icons';

@Component({
  standalone: true,
  selector: 'daio-sidenav-widget',
  templateUrl: './daio-sidenav-widget.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, DaioIconComponent],
})
export class DaioSidenavWidgetComponent implements OnInit, OnDestroy {
  @HostBinding('class') widgetMenuClass = 'daio-sidenav-widget';
  @HostBinding('class.daio-sidenav-widget--hidden') widgetHidden?: boolean;

  private _subscription?: Subscription;

  constructor(
    protected sidenav: DaioSidenavService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._subscription = this.sidenav.isExpanded$.subscribe((isExpanded) =>
      this.toggleWidget(isExpanded)
    );
  }

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }

  protected onIconClick(): void {
    this.sidenav.setIsExpanded(false);
  }

  private toggleWidget(isExpanded: boolean) {
    this.widgetHidden = isExpanded;
    this.cdRef.detectChanges();
  }
}
