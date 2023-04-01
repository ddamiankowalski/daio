import { AfterViewInit, Directive, ViewContainerRef } from "@angular/core";
import { DaioBadgeComponent } from "../../components/daio-badge/daio-badge.component";

@Directive({
    selector: '[daioBadge]'
})
export class DaioBadgeDirective implements AfterViewInit {
    constructor(
        private viewContainerRef: ViewContainerRef
    ) {}

    ngAfterViewInit(): void {
        this.viewContainerRef.createComponent(DaioBadgeComponent);
    }
}