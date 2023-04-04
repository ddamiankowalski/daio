import { ChangeDetectionStrategy, Component, HostBinding, Input, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { DaioIconComponent } from "../../../icons";
import { DaioSidenavService } from "../../services/daio-sidenav.service";
import { Subscription, combineLatest, filter, tap } from "rxjs";
import { IDaioMenuItem } from "../../interfaces/daio-menu-item.interface";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";
import { NgIf, NgFor } from "@angular/common";

@Component({
    standalone: true,
    selector: 'daio-sidenav-menu-item',
    templateUrl: './daio-sidenav-menu-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioIconComponent,
        NgIf,
        NgFor
    ],
    providers: [DaioRendererService]
})
export class SidenavMenuItemComponent implements OnInit, OnDestroy {
    @HostBinding('class') menuItemClass = 'daio-sidenav-menu-item';
    @Input() item!: IDaioMenuItem;

    private subscription?: Subscription;

    constructor(
        private sidenav: DaioSidenavService,
        private renderer: DaioRendererService
    ) {}

    ngOnInit(): void {
        this.subscription = combineLatest({
            activeItem: this.sidenav.activeItem$,
            isExpanded: this.sidenav.isExpanded$
        }).pipe(
            tap(() => this.resetActiveState()),
            filter(({ activeItem }) => activeItem?.title === this.item.title),
        ).subscribe(({ isExpanded }) => this.setActiveClass(isExpanded));
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    toggleMenu(): void {
        this.sidenav.setActiveItem(this.item);
        this.sidenav.setIsExpanded(true);
    }

    private setActiveClass(isExpanded: boolean): void {
        isExpanded ? 
            this.renderer.addClass('daio-sidenav-menu-item--active') :
            this.resetActiveState();
    }

    private resetActiveState(): void {
        this.renderer.removeClass('daio-sidenav-menu-item--active');
    }
}