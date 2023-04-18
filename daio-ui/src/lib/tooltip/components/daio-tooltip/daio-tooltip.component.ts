import { ChangeDetectionStrategy, Component, ViewEncapsulation, ChangeDetectorRef, ElementRef } from '@angular/core';

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

    public setTooltipPosition(hostElement: HTMLElement) {
        const bcRect = hostElement.getBoundingClientRect();
        const tooltipEl = this.elementRef.nativeElement as HTMLElement;
        
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.left = bcRect.right + 'px';
        tooltipEl.style.top = bcRect.top + 'px';
    }
}