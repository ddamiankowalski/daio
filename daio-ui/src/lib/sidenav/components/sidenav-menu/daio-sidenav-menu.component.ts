import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { SidenavMenuItemComponent } from "../sidenav-menu-item/daio-sidenav-menu-item.component";
import { IDaioMenuItem } from "../../interfaces/daio-menu-item.interface";
import { NgFor } from "@angular/common";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";

@Component({
    standalone: true,
    selector: 'daio-sidenav-menu',
    templateUrl: './daio-sidenav-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        SidenavMenuItemComponent,
        NgFor
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
    ];

    constructor(
        private renderer: DaioRendererService
    ) {
        console.log(renderer);
    }
}