import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { IDaioGradientWidget } from "../../interfaces/daio-widget.interface";
import { DaioCardComponent, DaioCardHeaderComponent } from "../../../card";
import { DaioButtonIconComponent, DaioButtonTextComponent } from "../../../buttons";
import { DaioIconComponent } from "../../../icons";
import { DaioBadgeComponent } from "../../../badge";

@Component({
    standalone: true,
    selector: 'daio-widget-gradient',
    templateUrl: './daio-widget-gradient.component.html',
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
export class DaioWidgetGradientComponent {
    @HostBinding('class') widgetGradientClass = 'daio-widget-gradient';

    @Input() widget?: IDaioGradientWidget;
}