import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    selector: 'daio-sidenav-menu-item',
    templateUrl: './daio-sidenav-menu-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SidenavMenuItemComponent {
    @Input() title?: string;
    @Input() icon?: string;
}