import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { IDaioWidget, IDaioWidgetAction } from "../../interfaces/daio-widget.interface";
import { NgFor, NgIf } from '@angular/common';
import { DaioIconComponent } from "../../../icons";
import { DaioTooltipDirective } from "daio-ui/src/lib/tooltip";

@Component({
    standalone: true,
    selector: 'daio-widget',
    templateUrl: './daio-widget.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        NgIf,
        NgFor,
        DaioIconComponent,
        DaioTooltipDirective
    ]
})
export class DaioWidgetComponent {
    @HostBinding('class') widgetClass = 'daio-widget';

    @Input() widget?: IDaioWidget;

    protected actions: IDaioWidgetAction[] = [
        { icon: 'circle-exclamation', title: 'See All', color: 'destructive' }
    ];
}