import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { DaioButtonIconComponent } from "../../../buttons";
import { DaioMenuComponent } from "../../../menu";
import { DaioMenuItemComponent } from "../../../menu/components/daio-menu-item/daio-menu-item.component";

@Component({
    standalone: true,
    selector: 'daio-header-user-avatar',
    templateUrl: './daio-header-user-avatar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioButtonIconComponent,
        DaioMenuComponent,
        DaioMenuItemComponent
    ]
})
export class DaioHeaderUserAvatarComponent { 
    @HostBinding('class') userAvatarClass = 'daio-header-user-avatar';
}