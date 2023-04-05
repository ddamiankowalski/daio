import { CommonModule } from "@angular/common";
import { AfterViewInit, ContentChildren, HostBinding, QueryList, Type } from "@angular/core";
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { DaioCardHeaderComponent } from "../daio-card-header/daio-card-header.component";

@Component({
    standalone: true,
    templateUrl: './daio-card.component.html',
    selector: 'daio-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule]
})
export class DaioCardComponent implements AfterViewInit {
    @ContentChildren(DaioCardHeaderComponent) set headerComponent(header: QueryList<DaioCardHeaderComponent>) {
        header.forEach((x: DaioCardHeaderComponent) => {
            this.header = x.constructor as any;
        });
    }

    header!: Type<DaioCardHeaderComponent>;

    @HostBinding('class') cardClass = 'daio-card';

    ngAfterViewInit(): void {
        console.log(this.header)
    }
}