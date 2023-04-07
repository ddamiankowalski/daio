import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    selector: 'daio-global-header',
    templateUrl: './daio-global-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class DaioGlobalHeaderComponent {
    @HostBinding('class') globalHeaderClass = 'daio-global-header';

    
}