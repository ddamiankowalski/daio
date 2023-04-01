import { Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { DaioIconComponent } from '../../../icons';
import { DaioBadgeComponent } from '../../../badge/components/daio-badge/daio-badge.component';
import { DaioRendererService } from '../../../common/services/daio-renderer.service';

@Component({
    standalone: true,
    selector: 'daio-sidenav-title',
    templateUrl: './daio-sidenav-title.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [DaioIconComponent, DaioBadgeComponent],
    providers: [DaioRendererService]
})
export class DaioSidenavTitleComponent {
    @HostBinding('class') titleClass = 'daio-sidenav-title';

    constructor(
        private renderer: DaioRendererService
    ) {}

    @Input() title?: string;

    @Input() set isExpanded(value: boolean) {
        value ? this.renderer.addClass('daio-sidenav-title--expanded') : this.renderer.removeClass('daio-sidenav-title--expanded');
    }
}