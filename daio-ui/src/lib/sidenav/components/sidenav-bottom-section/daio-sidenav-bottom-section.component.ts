import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { DaioIconComponent } from "../../../icons";
import { DaioBadgeDirective } from "daio-ui/src/lib/badge";
import { DaioSidenavService } from "../../services/daio-sidenav.service";
import { Subscription } from "rxjs";
import { DaioRendererService } from "daio-ui/src/lib/common/services/daio-renderer.service";

@Component({
    standalone: true,
    selector: 'daio-sidenav-bottom-section',
    templateUrl: './daio-sidenav-bottom-section.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioIconComponent,
        DaioBadgeDirective
    ],
    providers: [DaioRendererService]
})
export class DaioSidenavBottomSectionComponent implements OnInit, OnDestroy {
    @HostBinding('class') bottomClass = 'daio-sidenav-bottom-section';

    private subscription?: Subscription;

    constructor(
        private sidenav: DaioSidenavService,
        private renderer: DaioRendererService
    ) {}

    ngOnInit(): void {
        this.subscription = this.sidenav.isExpanded$.subscribe(isExpanded => this.updateClass(isExpanded))
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    private updateClass(isExpanded: boolean): void {
        isExpanded ? 
            this.renderer.addClass('daio-sidenav-bottom-section--expanded') : 
            this.renderer.removeClass('daio-sidenav-bottom-section--expanded');
    }
}