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
        this.updateBadgeValue(value);
    }

    @Input() color?: IDaioBadgeColor;

    private badgeElement!: HTMLSpanElement;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private elementRef: ElementRef<HTMLElement>
    ) {}

    ngOnInit(): void {
        this.createBadge();
    }

    private createBadge(): void {
        this.createBadgeElement();
        this.setBadgeStyles();
    }

    private setBadgeStyles(position?: IDaioBadgePosition): void {
        this.badgeElement.className = 'daio-badge';
        this.elementRef.nativeElement.style.position = 'relative';

        if(!position) {
            this.badgeElement.classList.add('daio-badge--left');
            this.badgeElement.classList.add('daio-badge--bottom');
        }

        this.setBadgeColor();
    }

    private createBadgeElement(): void {
        this.badgeElement = this.document.createElement('span');
        this.elementRef.nativeElement.appendChild(this.badgeElement);
        this.updateBadgeValue();
    }

    private updateBadgeValue(value: string): void {
        if(this.badgeElement) {
            this.badgeElement.textContent = value;
        }
    }

    private setBadgeColor(): void {
        if(this.color) {
            this.badgeElement.classList.add(`daio-badge--${this.color}`);
        }
    }
}