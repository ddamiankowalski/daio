import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { DaioHeaderSearchboxComponent } from "../daio-header-searchbox/daio-header-searchbox.component";

@Component({
    standalone: true,
    selector: 'daio-global-header',
    templateUrl: './daio-global-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        DaioHeaderSearchboxComponent
    ]
})
export class DaioGlobalHeaderComponent {
    @HostBinding('class') globalHeaderClass = 'daio-global-header';

    
}