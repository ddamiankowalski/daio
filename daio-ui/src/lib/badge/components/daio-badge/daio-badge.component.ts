import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    selector: 'daio-badge',
    templateUrl: './daio-badge.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaioBadgeComponent {
    @HostBinding('class') badgeClass = 'daio-badge';

    badgeValue?: string;

    setBadgeValue(value: string): void {
        this.badgeValue = value;
    }

    setStyles(element: HTMLElement): void {
        console.log(element);
    }
}