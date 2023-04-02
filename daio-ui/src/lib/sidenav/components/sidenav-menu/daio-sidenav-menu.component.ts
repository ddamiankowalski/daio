import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    selector: 'daio-sidenav-menu',
    templateUrl: './daio-sidenav-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class DaioSidenavMenuComponent {
}