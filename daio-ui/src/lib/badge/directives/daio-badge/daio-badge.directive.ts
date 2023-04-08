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

    private _badgeElement!: HTMLSpanElement;
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
        this._badgeElement.className = 'daio-badge';
        this.elementRef.nativeElement.style.position = 'relative';
        this.setBadgePosition(position);
        this.setBadgeColor();
    }

    private createBadgeElement(): void {
        this._badgeElement = this.document.createElement('span');
        this.elementRef.nativeElement.appendChild(this._badgeElement);
    }

    private updateViewValue(): void {
        this._badgeElement.textContent = this._currentValue ?? '';
    }

    private setBadgeColor(): void {
        this._badgeElement.classList.add(`daio-badge--${this.color ?? 'primary'}`);
    }

    private setBadgePosition(position?: IDaioBadgePosition): void {
        this._badgeElement.classList.add(`daio-badge--${position?.horizontal ?? 'left'}`);
        this._badgeElement.classList.add('daio-badge--bottom');
    }
}