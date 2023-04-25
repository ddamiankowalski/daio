import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { IDaioWidget } from "../../interfaces/daio-widget.interface";
import { NgIf } from '@angular/common';
import { DaioIconComponent } from "../../../icons";

@Component({
    standalone: true,
    selector: 'daio-widget',
    templateUrl: './daio-widget.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [NgIf, DaioIconComponent]
})
export class DaioWidgetComponent {
    @HostBinding('class') widgetClass = 'daio-widget';

    @Input() widget?: IDaioWidget;
}