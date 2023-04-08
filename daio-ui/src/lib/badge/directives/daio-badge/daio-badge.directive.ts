import { Directive, ElementRef, Inject, Input, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { IDaioBadgePosition } from "../../interfaces/daio-badge-position.interface";
import { IDaioBadgeColor } from "../../interfaces/daio-badge-color.interface";

@Directive({
    standalone: true,
    selector: '[daioBadge]'
})
export class DaioBadgeDirective implements OnInit {
    @Input() 
    set badgeValue(value: string) {
        this._currentValue = value;
    }

    @Input() color?: IDaioBadgeColor;

    private badgeElement!: HTMLSpanElement;
    private _currentValue?: string;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private elementRef: ElementRef<HTMLElement>,
    ) {}

    ngOnInit(): void {
        this.createBadge();
        this.updateViewValue();
    }

    private createBadge(): void {
        this.createBadgeElement();
        this.setBadgeStyles();
    }

    private setBadgeStyles(position?: IDaioBadgePosition): void {
        this.badgeElement.className = 'daio-badge';
        this.elementRef.nativeElement.style.position = 'relative';
        this.setBadgePosition(position);
        this.setBadgeColor();
    }

    private createBadgeElement(): void {
        this.badgeElement = this.document.createElement('span');
        this.elementRef.nativeElement.appendChild(this.badgeElement);
    }

    private updateViewValue(): void {
        this.badgeElement.textContent = this._currentValue ?? '';
    }

    private setBadgeColor(): void {
        if(this.color) {
            this.badgeElement.classList.add(`daio-badge--${this.color}`);
        }
    }

    private setBadgePosition(position?: IDaioBadgePosition): void {
        this.badgeElement.classList.add(`daio-badge--${position?.horizontal ?? 'left'}`);
        this.badgeElement.classList.add('daio-badge--bottom');
    }
}