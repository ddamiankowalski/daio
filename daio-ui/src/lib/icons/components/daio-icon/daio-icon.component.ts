import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DaioIconRegistryService } from "../../services/daio-icon-registry.service";
@Component({
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './daio-icon.component.html',
    selector: 'daio-icon',
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule],
    providers: [DaioIconRegistryService]
})
export class DaioIconComponent {
    @HostBinding('class') iconClass = 'daio-icon';

    constructor(private iconRegistry: DaioIconRegistryService) {}

    @Input() iconName?: string;
    @Input() iconType?: string;
}