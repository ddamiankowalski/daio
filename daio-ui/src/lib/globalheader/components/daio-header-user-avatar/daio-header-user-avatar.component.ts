import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { DaioButtonIconComponent, DaioButtonMenuComponent } from "../../../buttons";
import { DaioMenuComponent } from "../../../menu";
import { DaioIconComponent } from "daio-ui/src/lib/icons";
import { NgFor } from "@angular/common";

@Component({
    standalone: true,
    selector: 'daio-header-user-avatar',
    templateUrl: './daio-header-user-avatar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioButtonIconComponent,
        DaioMenuComponent,
        DaioButtonMenuComponent,
        DaioIconComponent,
        NgFor
    ]
})
export class DaioHeaderUserAvatarComponent { 
    @HostBinding('class') userAvatarClass = 'daio-header-user-avatar';

    handleClick(): void {
        console.log('option clicked')
    }
}