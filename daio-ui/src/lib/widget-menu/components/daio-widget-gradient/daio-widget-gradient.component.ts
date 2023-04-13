import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { IDaioGradientWidget } from "../../interfaces/daio-widget.interface";
import { DaioCardComponent, DaioCardHeaderComponent } from "daio-ui/src/lib/card";
import { DaioButtonTextComponent } from "daio-ui/src/lib/buttons";

@Component({
    standalone: true,
    selector: 'daio-widget-gradient',
    templateUrl: './daio-widget-gradient.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioCardComponent, 
        DaioCardHeaderComponent, 
        DaioButtonTextComponent
    ]
})
export class DaioWidgetGradientComponent {
    @HostBinding('class') widgetGradientClass = 'daio-widget-gradient';

    @Input() widget?: IDaioGradientWidget;
}