import { AfterViewInit, Directive, HostBinding, Input } from "@angular/core";
import { IDaioImagePosition } from "../../interfaces/daio-card-image.interface";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";
import { DaioCardComponent } from "../../components";

@Directive({
    standalone: true,
    selector: 'daio-card[daioCardImage]',
    providers: [DaioRendererService]
})
export class DaioCardImageDirective implements AfterViewInit {
    @HostBinding('class') cardImageClass = 'daio-card-image';

    @Input() imagePosition: IDaioImagePosition = 'left';
    @Input() imageSrc?: string;

    constructor(
        private renderer: DaioRendererService,
        private card: DaioCardComponent
    ) {}

    ngAfterViewInit(): void {
        this.card.setCardType({ type: 'image', position: 'left' });
        this.renderer.addClass(`daio-card-image--${this.imagePosition}`);
    }
}