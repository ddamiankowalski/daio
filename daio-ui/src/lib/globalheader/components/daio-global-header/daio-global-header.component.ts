import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { DaioHeaderSearchboxComponent } from "../daio-header-searchbox/daio-header-searchbox.component";
import { DaioHeaderActionsComponent } from "../daio-header-actions/daio-header-actions.component";
import { DaioHeaderUserComponent } from "../daio-header-user/daio-header-user.component";

@Component({
    standalone: true,
    selector: 'daio-global-header',
    templateUrl: './daio-global-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioHeaderSearchboxComponent,
        DaioHeaderActionsComponent,
        DaioHeaderUserComponent
    ]
})
export class DaioGlobalHeaderComponent {
    @HostBinding('class') globalHeaderClass = 'daio-global-header';
}