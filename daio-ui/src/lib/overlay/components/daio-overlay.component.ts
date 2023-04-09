import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostBinding, ViewChild, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { DaioOverlayService } from "../services/daio-overlay.service";

@Component({
    standalone: true,
    selector: 'daio-overlay',
    templateUrl: './daio-overlay.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class DaioOverlayComponent implements AfterViewInit {
    @HostBinding('id') overlayClass = 'daio-overlay';

    @ViewChild('ref', { read: ViewContainerRef }) outletRef!: ViewContainerRef;

    constructor(
        private overlay: DaioOverlayService,
        public elementRef: ElementRef
    ) {}

    ngAfterViewInit(): void {
        this.overlay.setOverlayElement(this);
    }
}