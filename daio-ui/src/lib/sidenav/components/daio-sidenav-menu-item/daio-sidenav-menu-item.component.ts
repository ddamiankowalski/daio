import { ChangeDetectionStrategy, Component, HostBinding, Input, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { DaioIconComponent } from "../../../icons";
import { DaioSidenavService } from "../../services/daio-sidenav.service";
import { Subscription, combineLatest, filter, tap } from "rxjs";
import { IDaioMenuItem } from "../../interfaces/daio-menu-item.interface";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";
import { NgIf, NgFor, AsyncPipe } from "@angular/common";
import { DaioTooltipDirective } from "../../../tooltip/directives/daio-tooltip/daio-tooltip.directive";

@Component({
    standalone: true,
    selector: 'daio-sidenav-menu-item',
    templateUrl: './daio-sidenav-menu-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioIconComponent,
        NgIf,
        NgFor,
        DaioTooltipDirective,
        AsyncPipe
    ],
    providers: [DaioRendererService]
})
export class DaioSidenavMenuItemComponent implements OnInit, OnDestroy {
    @HostBinding('class') menuItemClass = 'daio-sidenav-menu-item';
    @Input() item!: IDaioMenuItem;

    private subscription?: Subscription;

    constructor(
        protected sidenav: DaioSidenavService,
        private renderer: DaioRendererService
    ) {}

    ngOnInit(): void {
        this.subscription = combineLatest({
            activeItem: this.sidenav.activeItem$,
            isExpanded: this.sidenav.isExpanded$
        }).pipe(
            tap(() => this.removeActiveClass()),
            filter(({ activeItem }) => activeItem?.title === this.item.title),
        ).subscribe(({ isExpanded }) => this.setActiveClass(isExpanded));
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    itemClicked(): void {
        this.sidenav.setActiveItem(this.item);
        this.sidenav.setIsExpanded(true);
    }

    private setActiveClass(isExpanded: boolean): void {
        isExpanded ? 
            this.renderer.addClass('daio-sidenav-menu-item--active') :
            this.removeActiveClass();
    }

    private removeActiveClass(): void {
        this.renderer.removeClass('daio-sidenav-menu-item--active');
    }
}