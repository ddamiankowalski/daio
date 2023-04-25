import { ChangeDetectionStrategy, Component, ViewEncapsulation, ChangeDetectorRef, ElementRef } from '@angular/core';
import { IDaioTooltipPosition } from '../../interfaces/daio-tooltip-position.interface';

@Component({
    standalone: true,
    selector: 'daio-tooltip',
    templateUrl: './daio-tooltip.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaioTooltipComponent {
    protected value?: string;

    constructor(
        private cdRef: ChangeDetectorRef,
        private elementRef: ElementRef
    ) {}

    public setTooltipContent(value: string): void {
        this.value = value;
        this.cdRef.detectChanges();
    }

    public setTooltipPosition(hostElement: HTMLElement, position: IDaioTooltipPosition) {
        const bcRect = hostElement.getBoundingClientRect();
        const tooltipEl = this.elementRef.nativeElement as HTMLElement;
        tooltipEl.style.position = 'absolute';

        switch(position) {
            case 'bottom':
                this.setBottomTooltipPosition(bcRect, tooltipEl);
                break;
            case 'left':
                this.setLeftTooltipPosition(bcRect, tooltipEl);
                break;
            case 'right':
                this.setRightTooltipPosition(bcRect, tooltipEl);
                break;
            case 'top':
                this.setTopTooltipPosition(bcRect, tooltipEl);
        }
    }

    private setBottomTooltipPosition(rect: DOMRect, tooltipEl: HTMLElement): void {
        tooltipEl.style.top = rect['bottom'] + 8 + 'px';
        tooltipEl.style.left = rect.left + rect.width / 2 - tooltipEl.offsetWidth / 2 + 'px';
    }

    private setLeftTooltipPosition(rect: DOMRect, tooltipEl: HTMLElement): void {
        tooltipEl.style.left = rect['right'] - 8 + 'px';
        tooltipEl.style.top = rect.top + (rect.height / 2 - tooltipEl.offsetHeight / 2) + 'px';
    }

    private setRightTooltipPosition(rect: DOMRect, tooltipEl: HTMLElement): void {
        tooltipEl.style.left = rect['right'] + 4 + 'px';
        tooltipEl.style.top = rect.top + (rect.height / 2 - tooltipEl.offsetHeight / 2) + 'px';
    }

    private setTopTooltipPosition(rect: DOMRect, tooltipEl: HTMLElement): void {
        tooltipEl.style.top = rect['bottom'] - 4 + 'px';
        tooltipEl.style.top = rect.top + (rect.height / 2 - tooltipEl.offsetHeight / 2) + 'px';
    }
}