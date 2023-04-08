import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DaioButtonIconComponent } from "../../../buttons/components/daio-button-icon/daio-button-icon.component";

@Component({
    standalone: true,
    selector: 'daio-header-searchbox',
    templateUrl: './daio-header-searchbox.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        FormsModule,
        DaioButtonIconComponent
    ]
})
export class DaioHeaderSearchboxComponent {
    @HostBinding('class') searchboxClass = 'daio-header-searchbox';

    @Input() placeholder?: string;

    protected searchValue = '';

    onSearchSubmit(): void {
        console.log(this.searchValue);
    }
}