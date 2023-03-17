import { AfterViewInit, Directive, HostBinding, Input } from "@angular/core";
import { DaioButtonRendererService } from "../../services/daio-renderer.service";

@Directive({
    standalone: true,
    selector: '[daioFlatButton]',
    providers: [DaioButtonRendererService]
})
export class DaioFlatButtonDirective implements AfterViewInit {
    @HostBinding('class') buttonClass = 'daio-flat-button';

    constructor(
        private renderer: DaioButtonRendererService
    ) {
        this.renderer.setHTMLElements();
    }
}