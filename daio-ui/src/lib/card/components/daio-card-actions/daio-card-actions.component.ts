import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    selector: 'daio-card-actions',
    templateUrl: './daio-card-actions.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class DaioCardButtonsComponent {
    @HostBinding('class') cardButtonsClass = 'daio-card-actions';
}