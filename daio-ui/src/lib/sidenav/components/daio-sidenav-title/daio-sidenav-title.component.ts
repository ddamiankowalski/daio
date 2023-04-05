import { Component, HostBinding, Input, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { DaioIconComponent } from '../../../icons';
import { DaioRendererService } from '../../../common/services/daio-renderer.service';
import { DaioBadgeDirective } from "../../../badge/directives/daio-badge/daio-badge.directive";
import { Subscription } from "rxjs";
import { DaioSidenavService } from "../../services/daio-sidenav.service";

@Component({
    standalone: true,
    selector: 'daio-sidenav-title',
    templateUrl: './daio-sidenav-title.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [DaioIconComponent, DaioBadgeDirective],
    providers: [DaioRendererService]
})
export class DaioSidenavTitleComponent implements OnInit, OnDestroy {
    @HostBinding('class') titleClass = 'daio-sidenav-title';
    
    @Input() title?: string;

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
        isExpanded ? this.renderer.addClass('daio-sidenav-title--expanded') : this.renderer.removeClass('daio-sidenav-title--expanded');
    }
}