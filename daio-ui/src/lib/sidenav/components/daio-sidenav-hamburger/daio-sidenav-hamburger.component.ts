import { ChangeDetectionStrategy, Component, HostBinding, HostListener, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";
import { DaioSidenavService } from "../../services/daio-sidenav.service";
import { Subscription } from "rxjs";

@Component({
    standalone: true,
    selector: 'daio-sidenav-hamburger',
    templateUrl: './daio-sidenav-hamburger.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [DaioRendererService]
})
export class DaioSidenavHamburgerComponent implements OnInit, OnDestroy {
    @HostBinding('class') hamburgerClass = 'daio-sidenav-hamburger';

    private subscription?: Subscription;
    private isExpanded?: boolean = false;

    @HostListener('click')
    onHamburgerClick() {
        this.isExpanded = !this.isExpanded;
        this.sidenav.setIsExpanded(this.isExpanded);
    }

    constructor(
        private renderer: DaioRendererService,
        private sidenav: DaioSidenavService
    ) {}

    ngOnInit(): void {
        this.subscription= this.sidenav.isExpanded$.subscribe(isExpanded => this.updateExpanded(isExpanded));
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    private updateExpanded(value: boolean) {
        this.isExpanded = value;
        this.changeHamburgerClass();
    }

    private changeHamburgerClass(): void {
        this.isExpanded ?
            this.renderer.addClass('daio-sidenav-hamburger--expanded') :
            this.renderer.removeClass('daio-sidenav-hamburger--expanded');
    }
}