import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { DaioIconComponent } from "../../../icons";

@Component({
    standalone: true,
    templateUrl: './daio-card-header.component.html',
    selector: 'daio-card-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        CommonModule,
        DaioIconComponent
    ]
})
export class DaioCardHeaderComponent {
    @HostBinding('class') cardHeaderClass = 'daio-card-header';
}