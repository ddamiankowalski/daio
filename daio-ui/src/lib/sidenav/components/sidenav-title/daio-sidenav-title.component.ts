import { Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { DaioIconComponent } from "daio-ui/src/lib/icons";

@Component({
    standalone: true,
    selector: 'daio-sidenav-title',
    templateUrl: './daio-sidenav-title.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioIconComponent
    ]
})
export class DaioSidenavTitleComponent {
    @HostBinding('class') titleClass = 'daio-sidenav-title'
}