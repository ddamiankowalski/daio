import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { IDaioBadgeColor } from "../../interfaces/daio-badge-color.interface";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";

@Component({
    standalone: true,
    selector: 'daio-badge',
    templateUrl: './daio-badge.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [DaioRendererService]
})
export class DaioBadgeComponent {
    @HostBinding('class') badgeClass = 'daio-badge-standalone';

    @Input() set color(value: IDaioBadgeColor) {
        this.renderer.addClass('daio-badge-standalone--' + (value ?? 'primary'));
    }

    constructor(private renderer: DaioRendererService) {}
}