import { AfterViewInit, Directive, ElementRef, HostBinding, Inject, Input } from "@angular/core";
import { IDaioImagePosition } from "../../interfaces/daio-card-image.interface";
import { DaioRendererService } from "../../../common/services/daio-renderer.service";
import { DOCUMENT } from "@angular/common";

@Directive({
    standalone: true,
    selector: 'daio-card[daioCardImage]',
    providers: [DaioRendererService]
})
export class DaioCardImageDirective implements AfterViewInit {
    @HostBinding('class') cardImageClass = 'daio-card-image';

    @Input() imagePosition: IDaioImagePosition = 'left';
    @Input() imageSrc?: string;

    private imgElement!: HTMLDivElement;

    constructor(
        private renderer: DaioRendererService,
        @Inject(DOCUMENT) private document: Document,
        private elementRef: ElementRef<HTMLElement>
    ) {}

    ngAfterViewInit(): void {
        this.renderer.addClass(`daio-card-image--${this.imagePosition}`);
        this.createImgElement();
    }

    private createImgElement(): void {
        this.imgElement = this.document.createElement('div');
        this.addClasses();
        this.elementRef.nativeElement.insertBefore(
            this.imgElement, 
            this.elementRef.nativeElement.firstChild
        );
    }

    private addClasses(): void {
        this.imgElement.classList.add('daio-card-image__img-container');
    }
}