import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { SidenavMenuItemComponent } from "../sidenav-menu-item/daio-sidenav-menu-item.component";
import { IDaioMenuItem } from "../../interfaces/daio-menu-item.interface";

@Component({
    standalone: true,
    selector: 'daio-sidenav-menu',
    templateUrl: './daio-sidenav-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        SidenavMenuItemComponent
    ]
})
export class DaioSidenavMenuComponent {
    @HostBinding('class') menuClass = 'daio-sidenav-menu';

    public menuItems: IDaioMenuItem[] = [
        { title: 'news', icon: 'chat' },
        { title: 'calendar', icon: 'calendar' },
        { title: 'settings', icon: 'cog' },
    ];
}