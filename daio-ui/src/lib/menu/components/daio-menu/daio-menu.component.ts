import { ChangeDetectionStrategy, Component, HostBinding, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    selector: 'daio-menu',
    templateUrl: './daio-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    exportAs: 'daioMenu'
})
export class DaioMenuComponent {
    @HostBinding('class') menuClass = 'daio-menu';

    @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;
}