import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    selector: 'daio-menu-item',
    templateUrl: './daio-menu-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class DaioMenuItemComponent {
    @HostBinding('class') menuItemClass = 'daio-menu-item';
}