import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { DaioHeaderUserAvatarComponent } from "../daio-header-user-avatar/daio-header-user-avatar.component";

@Component({
    standalone: true,
    selector: 'daio-header-user',
    templateUrl: './daio-header-user.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [DaioHeaderUserAvatarComponent]
})
export class DaioHeaderUserComponent {
    @HostBinding('class') headerUserClass = 'daio-global-header-user';
}