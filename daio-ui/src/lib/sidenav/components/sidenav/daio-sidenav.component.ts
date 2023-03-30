import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { DaioSidenavHamburgerComponent } from "../sidenav-hamburger/daio-sidenav-hamburger.component";

@Component({
    standalone: true,
    selector: 'daio-sidenav',
    templateUrl: './daio-sidenav.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioSidenavHamburgerComponent
    ]
})
export class DaioSidenavComponent {
    @HostBinding('class') sidenavClass = 'daio-sidenav';

    isExpanded = false;

    handleHamburgerClicked(isExpanded: boolean): void {
        this.isExpanded = isExpanded;
        console.log(this.isExpanded);
    }
}