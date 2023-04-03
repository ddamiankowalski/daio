import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { DaioIconComponent } from "../../../icons";

@Component({
    standalone: true,
    selector: 'daio-sidenav-menu-item',
    templateUrl: './daio-sidenav-menu-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioIconComponent
    ]
})
export class SidenavMenuItemComponent {
    @HostBinding('class') menuItemClass = 'daio-sidenav-menu-item';

    @Input() title?: string;
    @Input() icon?: string;
}