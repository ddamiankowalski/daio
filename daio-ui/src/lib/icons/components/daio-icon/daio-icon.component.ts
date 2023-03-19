import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './daio-icon.component.html',
    encapsulation: ViewEncapsulation.None
})
export class DaioIconComponent {
    
}