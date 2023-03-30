import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { DaioIconComponent } from "../../../icons";

@Component({
    standalone: true,
    selector: 'daio-sidenav',
    templateUrl: './daio-sidenav.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioIconComponent
    ]
})
export class DaioSidenavComponent {
    @HostBinding('class') sidenavClass = 'daio-sidenav';

    isExpanded = false;
}