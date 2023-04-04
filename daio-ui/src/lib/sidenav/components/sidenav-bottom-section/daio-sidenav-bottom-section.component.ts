import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { DaioIconComponent } from "../../../icons";
import { DaioBadgeDirective } from "daio-ui/src/lib/badge";

@Component({
    standalone: true,
    selector: 'daio-sidenav-bottom-section',
    templateUrl: './daio-sidenav-bottom-section.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioIconComponent,
        DaioBadgeDirective
    ]
})
export class DaioSidenavBottomSectionComponent {
    @HostBinding('class') bottomClass = 'daio-sidenav-bottom-section';
}