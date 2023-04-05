import { HostBinding } from "@angular/core";
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    templateUrl: './daio-card.component.html',
    selector: 'daio-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class DaioCardComponent {
    @HostBinding('class') cardClass = 'daio-card';
}