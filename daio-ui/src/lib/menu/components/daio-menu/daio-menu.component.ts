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
    @ViewChild(TemplateRef) templateRef!: TemplateRef<unknown>;

    public hostElement?: ElementRef;
    
    private _overlayElementRef?: EmbeddedViewRef<unknown> | null = null;
    private _menuHidden$: Subject<void> = new Subject();
    private _animationRunning = false;

    constructor(
        private overlay: DaioOverlayService,
        @Inject(DOCUMENT) private document: Document
    ) {}

    public toggleMenu(event: Event): void {
        if(!this._animationRunning) {
            this._overlayElementRef ? this.hideMenu() : this.showMenu();
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }

    private showMenu(): void {
        this._overlayElementRef = this.overlay.createOverlayTemplate(this.templateRef);
        const [ menuNode ] = this._overlayElementRef.rootNodes as HTMLElement[];
        this.setNodePosition(menuNode);
        this.listenForClose();
    }

    private hideMenu(): void {
        const [ menuNode ] = this._overlayElementRef?.rootNodes as HTMLElement[];
        this.startHideAnimation(menuNode);
        menuNode.onanimationend = this.destroyMenu.bind(this);
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
            takeUntil(this._menuHidden$)
        ).subscribe(() => this.hideMenu());
    }

    private startHideAnimation(menuNode: HTMLElement): void {
        this._animationRunning = true;
        menuNode.style.animation="fadeOut .1s";
    }

    private destroyMenu(): void {
        this._menuHidden$.next();
        this._overlayElementRef?.destroy();
        this._overlayElementRef = null;
        this._animationRunning = false;
    }
}