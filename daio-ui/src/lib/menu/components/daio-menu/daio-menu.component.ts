import { ChangeDetectionStrategy, Component, ElementRef, EmbeddedViewRef, HostBinding, Inject, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { DaioOverlayService } from "../../../overlay/services/daio-overlay.service";
import { CommonModule, DOCUMENT } from "@angular/common";
import { Subject, fromEvent, takeUntil } from "rxjs";

@Component({
    standalone: true,
    selector: 'daio-menu',
    templateUrl: './daio-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    exportAs: 'daioMenu',
    imports: [CommonModule]
})
export class DaioMenuComponent {
    @HostBinding('class') menuClass = 'daio-menu';
    @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;

    public hostElement?: ElementRef;
    public overlayElementRef?: EmbeddedViewRef<unknown>;
    public menuHidden$: Subject<void> = new Subject();

    private isAnimationRunning = false;

    constructor(
        private overlay: DaioOverlayService,
        @Inject(DOCUMENT) private document: Document
    ) {}

    public toggleMenu(event: Event): void {
        if(!this.isAnimationRunning) {
            event.preventDefault();
            event.stopImmediatePropagation();
            this.overlayElementRef ? this.hideMenu() : this.showMenu();
        }
    }

    private showMenu(): void {
        this.overlayElementRef = this.overlay.createOverlayTemplate(this.templateRef);
        const [ htmlNode ] = this.overlayElementRef.rootNodes as HTMLElement[];
        this.setNodePosition(htmlNode);
        this.listenForClose();
    }

    private hideMenu(): void {
        const [ htmlNode ] = this.overlayElementRef?.rootNodes as HTMLElement[];
        this.isAnimationRunning = true;
        htmlNode.style.animation="fadeOut .1s";
        htmlNode.onanimationend = () => {
            this.menuHidden$.next();
            this.overlayElementRef?.destroy();
            this.overlayElementRef = undefined;
            this.isAnimationRunning = false;
        }
    }

    private setNodePosition(node: HTMLElement): void {
        node.style.left = 
            ((this.hostElement?.nativeElement as HTMLElement).offsetLeft - 
            node.clientWidth + this.hostElement?.nativeElement.clientWidth).toString() + 'px';

        node.style.top = 
            ((this.hostElement?.nativeElement as HTMLElement).offsetTop + 
            (this.hostElement?.nativeElement as HTMLElement).clientHeight + 8).toString() + 'px';
    }

    private listenForClose(): void {
        fromEvent(this.document, 'click').pipe(
            takeUntil(this.menuHidden$)
        ).subscribe(() => this.hideMenu());
    }
}