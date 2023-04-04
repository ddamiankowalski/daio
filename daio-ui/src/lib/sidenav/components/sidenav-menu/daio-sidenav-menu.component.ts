import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { IDaioMenuItem } from "../../interfaces/daio-menu-item.interface";
import { NgFor } from "@angular/common";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";
import { SidenavMenuItemComponent } from '../sidenav-menu-item/daio-sidenav-menu-item.component'

@Component({
    standalone: true,
    selector: 'daio-sidenav-menu',
    templateUrl: './daio-sidenav-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        NgFor,
        SidenavMenuItemComponent
    ],
    providers: [DaioRendererService]
})
export class DaioSidenavMenuComponent {
    @HostBinding('class') menuClass = 'daio-sidenav-menu';

    public menuItems: IDaioMenuItem[] = [
        { 
            title: 'news', 
            icon: 'comment' 
        },
        { 
            title: 'calendar', 
            icon: 'calendar',
            items: [
                { title: 'my calendars' },
                { title: 'shared calendars' }
            ]
        },
        { 
            title: 'settings', 
            icon: 'cog' 
        },
        {
            title: 'contacts',
            icon: 'users'
        }
    ];
}