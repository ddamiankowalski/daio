import { Component } from "@angular/core";
import { DaioCardComponent } from "../../../components";
import { DaioCardImageDirective } from "../daio-card-image.directive";

@Component({
    standalone: true,
    selector: 'directive-host',
    template: `<div>
        <daio-card daioCardImage>
        </daio-card>
    </div>`,
    imports: [
        DaioCardImageDirective,
        DaioCardComponent
    ]
})
export class HostComponent implements Partial<DaioCardComponent> {
    
}

@Component({
    standalone: true,
    selector: 'directive-host-right',
    template: `<div>
        <daio-card daioCardImage imagePosition="right">
        </daio-card>
    </div>`,
    imports: [
        DaioCardImageDirective,
        DaioCardComponent
    ]
})
export class HostRightComponent implements Partial<DaioCardComponent> {}

