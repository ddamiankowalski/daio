import { Component, ViewChild } from "@angular/core";
import { DaioBadgeDirective } from "../daio-badge.directive";

@Component({
    standalone: true,
    selector: 'daio-badge-host',
    template: `<div daioBadge></div>`,
    imports: [DaioBadgeDirective]
})
export class DaioBadgeDirectiveHostComponent {
    @ViewChild(DaioBadgeDirective) directive!: DaioBadgeDirective;
}