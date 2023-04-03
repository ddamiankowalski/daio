import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { DaioSidenavHamburgerComponent } from "../sidenav-hamburger/daio-sidenav-hamburger.component";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";
import { DaioSidenavTitleComponent } from "../sidenav-title/daio-sidenav-title.component";
import { DaioSidenavMenuComponent } from '../sidenav-menu/daio-sidenav-menu.component';
import { DaioSidenavService } from "../../services/daio-sidenav.service";
import { Subscription } from "rxjs";

@Component({
    standalone: true,
    selector: 'daio-sidenav',
    templateUrl: './daio-sidenav.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioSidenavHamburgerComponent,
        DaioSidenavTitleComponent,
        DaioSidenavMenuComponent
    ],
    providers: [
        DaioRendererService,
        DaioSidenavService
    ]
})
export class DaioSidenavComponent implements OnInit, OnDestroy {
    @HostBinding('class') sidenavClass = 'daio-sidenav';

    private subscription?: Subscription;

    constructor(
        private renderer: DaioRendererService,
        private sidenav: DaioSidenavService
    ) {}

    ngOnInit(): void {
        this.subscription = this.sidenav.isExpanded$.subscribe(isExpanded => this.updateIsExpanded(isExpanded))
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    private updateIsExpanded(isExpanded: boolean): void {
        isExpanded ? this.addExpandedClass() : this.removeExpandedClass();
    }

    private addExpandedClass(): void {
        this.renderer.addClass('daio-sidenav--expanded');
    }

    private removeExpandedClass(): void {
        this.renderer.removeClass('daio-sidenav--expanded');
    }
}