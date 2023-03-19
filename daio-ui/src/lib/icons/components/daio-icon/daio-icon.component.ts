import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { CommonModule } from '@angular/common';
@Component({
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './daio-icon.component.html',
    selector: 'daio-icon',
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule]
})
export class DaioIconComponent {
    @HostBinding('class') iconClass = 'daio-icon';

    @Input() iconName?: string;
    @Input() iconType?: string;
}