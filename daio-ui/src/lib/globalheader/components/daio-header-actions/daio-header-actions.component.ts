import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { DaioIconComponent } from "../../../icons";
import { DaioButtonIconComponent } from "../../../buttons";

@Component({
    standalone: true,
    selector: 'daio-header-actions',
    templateUrl: './daio-header-actions.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioIconComponent,
        DaioButtonIconComponent
    ]
})
export class DaioHeaderActionsComponent {
    @HostBinding('class') actionsClass = 'daio-global-header-actions';
}