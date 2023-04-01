import { AfterViewInit, ComponentRef, Directive, ElementRef, Input, ViewContainerRef } from "@angular/core";
import { DaioBadgeComponent } from "../../components/daio-badge/daio-badge.component";

@Directive({
    standalone: true,
    selector: '[daioBadge]'
})
export class DaioBadgeDirective implements AfterViewInit {
    @Input() set badgeValue(value: string) {
        this.value = value;
        this.setBadgeValue();
    }

    private componentRef?: ComponentRef<DaioBadgeComponent>;
    private value?: string;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private elementRef: ElementRef
    ) {}

    ngAfterViewInit(): void {
        this.createBadgeComponent();
        this.setBadgeValue();
        this.setBadgeStyles();
    }

    private createBadgeComponent(): void {
        this.componentRef = this.viewContainerRef.createComponent(DaioBadgeComponent);
    }

    private setBadgeValue(): void {
        if(this.componentRef) {
            this.componentRef.instance.badgeValue = this.value;
            this.componentRef.changeDetectorRef.detectChanges();
        }
    }

    private setBadgeStyles(): void {
        this.componentRef && this.componentRef.instance.setStyles(this.elementRef.nativeElement);
    }
}