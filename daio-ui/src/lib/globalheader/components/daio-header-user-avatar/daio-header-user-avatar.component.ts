import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { DaioButtonIconComponent } from "../../../buttons";

@Component({
    standalone: true,
    selector: 'daio-header-user-avatar',
    templateUrl: './daio-header-user-avatar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [DaioButtonIconComponent]
})
export class DaioHeaderUserAvatarComponent { 
    @HostBinding('class') userAvatarClass = 'daio-header-user-avatar';
}