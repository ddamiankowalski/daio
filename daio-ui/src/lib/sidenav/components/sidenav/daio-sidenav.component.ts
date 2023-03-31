import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { DaioSidenavHamburgerComponent } from "../sidenav-hamburger/daio-sidenav-hamburger.component";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";

@Component({
    standalone: true,
    selector: 'daio-sidenav',
    templateUrl: './daio-sidenav.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [DaioSidenavHamburgerComponent],
    providers: [DaioRendererService]
})
export class DaioSidenavComponent {
    @HostBinding('class') sidenavClass = 'daio-sidenav';

    constructor(private renderer: DaioRendererService) {}

    isExpanded = true;

    handleHamburgerClicked(isExpanded: boolean): void {
        this.isExpanded = isExpanded;
        this.isExpanded ? this.addExpandedClass() : this.removeExpandedClass();
    }

    private addExpandedClass(): void {
        this.renderer.addClass('daio-sidenav--expanded');
    }

    private removeExpandedClass(): void {
        this.renderer.removeClass('daio-sidenav--expanded');
    }
}