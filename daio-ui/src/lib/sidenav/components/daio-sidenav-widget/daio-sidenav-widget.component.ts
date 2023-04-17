import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { DaioWidgetComponent } from "../../../widget-menu/components/daio-widget/daio-widget.component";
import { IDaioWidget } from "../../../widget-menu/interfaces/daio-widget.interface";
import { CommonModule } from '@angular/common';
import { DaioWidgetNewsComponent } from "../../../widget-menu/components/daio-widget-news/daio-widget-news.component";
import { DaioSidenavService } from "../../services/daio-sidenav.service";
import { Subscription } from "rxjs";

@Component({
    standalone: true,
    selector: 'daio-sidenav-widget',
    templateUrl: './daio-sidenav-widget.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioWidgetComponent,
        CommonModule,
        DaioWidgetNewsComponent
    ]
})
export class DaioSidenavWidgetComponent implements OnInit, OnDestroy {
    @HostBinding('class') widgetMenuClass = 'daio-sidenav-widget';
    @HostBinding('class.daio-sidenav-widget--hidden') widgetHidden?: boolean;

    @Input() widgets?: IDaioWidget[];

    private _subscription?: Subscription;

    constructor(
        protected sidenav: DaioSidenavService,
        private cdRef: ChangeDetectorRef
        ) {}

    ngOnInit(): void {
        this._subscription = this.sidenav.isExpanded$.subscribe(isExpanded => this.toggleWidget(isExpanded));
    }

    ngOnDestroy(): void {
        this._subscription?.unsubscribe();
    }

    private toggleWidget(isExpanded: boolean) {
        this.widgetHidden = isExpanded;
        this.cdRef.detectChanges();
    }
}