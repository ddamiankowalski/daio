import { Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { DaioIconComponent } from '../../../icons';
import { DaioRendererService } from '../../../common/services/daio-renderer.service';
import { DaioBadgeDirective } from "../../../badge/directives/daio-badge/daio-badge.directive";

@Component({
    standalone: true,
    selector: 'daio-sidenav-title',
    templateUrl: './daio-sidenav-title.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [DaioIconComponent, DaioBadgeDirective],
    providers: [DaioRendererService]
})
export class DaioSidenavTitleComponent {
    @HostBinding('class') titleClass = 'daio-sidenav-title';
    
    @Input() title?: string;

    @Input() set isExpanded(value: boolean) {
        value ? this.renderer.addClass('daio-sidenav-title--expanded') : this.renderer.removeClass('daio-sidenav-title--expanded');
    }
    
    constructor(
        private renderer: DaioRendererService
    ) {}
}