import { ChangeDetectionStrategy, Component, HostBinding, Input, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    templateUrl: './daio-badge.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaioBadgeComponent {
    @ViewChild('badge', { read: TemplateRef, static: true }) private badge?: TemplateRef<unknown>;
    @HostBinding('class') badgeClass = 'daio-badge';

    @Input() value?: string;
}