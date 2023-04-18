import { Directive, AfterViewInit, ComponentRef, ElementRef, OnDestroy, NgZone, Input } from '@angular/core';
import { DaioOverlayService } from '../../../overlay/services/daio-overlay.service';
import { DaioTooltipComponent } from '../../components/daio-tooltip/daio-tooltip.component';
import { fromEvent, take } from 'rxjs';

@Directive({
    standalone: true,
    selector: '[daioTooltip]'
})
export class DaioTooltipDirective implements AfterViewInit, OnDestroy {
    @Input() tooltipText?: string;
    @Input() tooltipIf = true;

    private _tooltip?: ComponentRef<DaioTooltipComponent> | null;
    private _hostElement!: HTMLElement;

    constructor(
        private overlay: DaioOverlayService,
        private element: ElementRef,
        private ngZone: NgZone
    ) {}

    ngAfterViewInit(): void {
        this._hostElement = this.element.nativeElement as HTMLElement;
        this.setHostHoverListeners();
    }

    ngOnDestroy(): void {
        this._hostElement.removeEventListener('mouseenter', this.handleHover.bind(this));
    }

    private setHostHoverListeners(): void {
        this.ngZone.runOutsideAngular(() => {
            this._hostElement.addEventListener('mouseenter', this.handleHover.bind(this));
        });
    }

    private handleHover(): void {
        if(!this._tooltip && this.tooltipIf) {
            this._tooltip = this.overlay.createOverlayComponent(DaioTooltipComponent);
            this.setTooltipContent();
            this.listenForMouseLeave();
        }
    }

    private listenForMouseLeave(): void {
        fromEvent(this._hostElement, 'mouseleave')
            .pipe(take(1))
            .subscribe(() => this.destroyTooltip())
    }

    private setTooltipContent(): void {
        if(!this.tooltipText) {
            throw new Error('DAIO_TOOLTIP_ERROR: No content for tooltip was provided!');
        }
        this._tooltip?.instance.setTooltipContent(this.tooltipText);
        this._tooltip?.instance.setTooltipPosition(this._hostElement);
    }

    private destroyTooltip(): void {
        this._tooltip?.destroy();
        this._tooltip = null;
    }
}