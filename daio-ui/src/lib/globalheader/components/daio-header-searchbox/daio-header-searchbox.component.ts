import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    standalone: true,
    selector: 'daio-header-searchbox',
    templateUrl: './daio-header-searchbox.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [FormsModule]
})
export class DaioHeaderSearchboxComponent {
    @HostBinding('class') searchboxClass = 'daio-header-searchbox';

    protected searchValue = '';
}