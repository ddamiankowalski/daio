import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { IDaioMenuItem } from "../../interfaces/daio-menu-item.interface";
import { NgFor } from "@angular/common";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";
import { SidenavMenuItemComponent } from '../sidenav-menu-item/daio-sidenav-menu-item.component'
import { DaioSidenavService } from "../../services/daio-sidenav.service";
import { Subscription } from "rxjs";

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
export class DaioSidenavMenuComponent implements OnInit, OnDestroy {
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

    private subscription?: Subscription;

    constructor(
        private renderer: DaioRendererService,
        private sidenav: DaioSidenavService
    ) {}

    ngOnInit(): void {
        this.sidenav.isExpanded$?.subscribe(isExpanded => {
            !isExpanded ? 
                this.renderer.addClass('daio-sidenav-menu--hidden') : 
                this.renderer.removeClass('daio-sidenav-menu--hidden');
        })
    }
    
    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}