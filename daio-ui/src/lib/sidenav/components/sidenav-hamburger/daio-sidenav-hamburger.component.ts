import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Output, ViewEncapsulation } from "@angular/core";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";

@Component({
    standalone: true,
    selector: 'daio-sidenav-hamburger',
    templateUrl: './daio-sidenav-hamburger.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [DaioRendererService]
})
export class DaioSidenavHamburgerComponent {
    private isExpanded = false;
    @Output() hamburgerClicked: EventEmitter<boolean> = new EventEmitter(); 

    @HostBinding('class') hamburgerClass = 'daio-sidenav-hamburger';

    @HostListener('click')
    onHamburgerClick() {
        this.emitHamburgerClicked();
        this.changeHamburgerClass();
    }

    constructor(
        private renderer: DaioRendererService
    ) {}

    private changeHamburgerClass(): void {
        this.isExpanded ?
            this.renderer.addClass('daio-sidenav-hamburger--expanded') :
            this.renderer.removeClass('daio-sidenav-hamburger--expanded');
    }

    private emitHamburgerClicked(): void {
        this.isExpanded = !this.isExpanded;
        this.hamburgerClicked.emit(this.isExpanded);
    }
}