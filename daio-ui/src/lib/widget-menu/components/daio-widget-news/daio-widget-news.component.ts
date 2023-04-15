import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { DaioCardComponent, DaioCardHeaderComponent } from "../../../card";
import { DaioButtonIconComponent, DaioButtonTextComponent } from "../../../buttons";
import { DaioIconComponent } from "../../../icons";
import { DaioBadgeComponent } from "../../../badge";

@Component({
    standalone: true,
    selector: 'daio-widget-news',
    templateUrl: './daio-widget-news.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioCardComponent, 
        DaioCardHeaderComponent, 
        DaioButtonTextComponent,
        DaioIconComponent,
        DaioBadgeComponent,
        DaioButtonIconComponent
    ]
})
export class DaioWidgetNewsComponent {
    @HostBinding('class') widgetNewsClass = 'daio-widget-news';
}