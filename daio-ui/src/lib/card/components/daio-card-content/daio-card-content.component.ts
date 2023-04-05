import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    selector: 'daio-card-content',
    templateUrl: './daio-card-content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class DaioCardContentComponent {
    @HostBinding('class') contentClass = 'daio-card-content';
}