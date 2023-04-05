import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ChangeDetectorRef, HostBinding } from "@angular/core";
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { IDaioCard, IDaioCardTypeName } from "../../interfaces/daio-card.interface";
import { IDaioImagePosition } from "../../interfaces/daio-card-image.interface";

@Component({
    standalone: true,
    templateUrl: './daio-card.component.html',
    selector: 'daio-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule, NgOptimizedImage]
})
export class DaioCardComponent {
    @HostBinding('class') cardClass = 'daio-card';

    protected type?: IDaioCardTypeName;
    protected position?: IDaioImagePosition;

    constructor(private cdRef: ChangeDetectorRef) {}

    public setCardType(card: IDaioCard): void {
        this.type = card.type;
        this.position = card.position;

        this.cdRef.detectChanges();
    }
}