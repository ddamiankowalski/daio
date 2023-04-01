import { Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { DaioRendererService } from "daio-ui/src/lib/common/services/daio-renderer.service";
import { DaioIconComponent } from "daio-ui/src/lib/icons";

@Component({
    standalone: true,
    selector: 'daio-sidenav-title',
    templateUrl: './daio-sidenav-title.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [DaioIconComponent],
    providers: [DaioRendererService]
})
export class DaioSidenavTitleComponent {
    @HostBinding('class') titleClass = 'daio-sidenav-title';

    constructor(
        private renderer: DaioRendererService
    ) {}

    @Input() set isExpanded(value: boolean) {
        value ? this.renderer.addClass('daio-sidenav-title--expanded') : this.renderer.removeClass('daio-sidenav-title--expanded');
    }
}