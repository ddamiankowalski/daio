import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    selector: 'daio-widget-gradient',
    templateUrl: './daio-widget-gradient.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class DaioWidgetGradientComponent {
    @HostBinding('class') widgetGradientClass = 'daio-widget-gradient';
}