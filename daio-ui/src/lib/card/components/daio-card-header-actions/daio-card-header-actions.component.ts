import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Output, ViewEncapsulation } from "@angular/core";
import { DaioIconComponent } from "../../../icons";

@Component({
    standalone: true,
    selector: 'daio-card-header-actions',
    templateUrl: './daio-card-header-actions.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [DaioIconComponent]
})
export class DaioCardHeaderActionsComponent {
    @HostBinding('class') headerActionsClas = 'daio-card-header-actions';

    @Output() iconClicked: EventEmitter<void> = new EventEmitter<void>(); 

    onIconClick(): void {
        this.iconClicked.emit();
    }
}