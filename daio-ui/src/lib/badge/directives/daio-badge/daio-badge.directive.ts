import { Directive, ElementRef, Inject, Input, OnChanges, SimpleChanges } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { IDaioBadgePosition } from "../../interfaces/daio-badge-position.interface";

@Directive({
    standalone: true,
    selector: '[daioBadge]'
})
export class DaioBadgeDirective implements OnChanges {
    @Input() badgeValue?: string;

    private badgeElement!: HTMLSpanElement;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private elementRef: ElementRef<HTMLElement>
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        if('badgeValue' in changes) {
            if(!this.badgeElement) {
                this.createBadge(changes);
            }
            this.updateBadgeValue();
        }
    }

    private createBadge(changes: SimpleChanges): void {
        const value = changes['badgeValue']?.currentValue;
        const position = changes['badgePosition']?.currentValue as IDaioBadgePosition;

        this.badgeElement = this.document.createElement('span');
        this.setBadgeStyles(value, position);
        this.elementRef.nativeElement.appendChild(this.badgeElement);
    }

    private setBadgeStyles(value: string, position?: IDaioBadgePosition): void {
        this.badgeElement.textContent = value;
        this.badgeElement.className = 'daio-badge';
        this.elementRef.nativeElement.style.position = 'relative';

        if(!position) {
            this.badgeElement.classList.add('daio-badge--left');
            this.badgeElement.classList.add('daio-badge--bottom');
        }
    }

    private updateBadgeValue(): void {
        console.log('update badge value');
    }
}