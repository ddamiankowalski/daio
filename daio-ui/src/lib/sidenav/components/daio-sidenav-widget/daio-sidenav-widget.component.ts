import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { DaioWidgetComponent } from "../../../widget-menu/components/daio-widget/daio-widget.component";
import { IDaioWidget } from "../../../widget-menu/interfaces/daio-widget.interface";
import { NgFor } from '@angular/common';
import { DaioWidgetNewsComponent } from "../../../widget-menu/components/daio-widget-news/daio-widget-news.component";

@Component({
    standalone: true,
    selector: 'daio-sidenav-widget',
    templateUrl: './daio-sidenav-widget.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioWidgetComponent,
        NgFor,
        DaioWidgetNewsComponent
    ]
})
export class DaioSidenavWidgetComponent {
    @HostBinding('class') widgetMenuClass = 'daio-sidenav-widget';

    @Input() widgets?: IDaioWidget[];
}