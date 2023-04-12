import { Component, ViewChild } from "@angular/core";
import { DaioMenuComponent } from "../daio-menu.component";
import { DaioButtonIconComponent } from "../../../../buttons";

@Component({
    standalone: true,
    templateUrl: './menu-host.component.html',
    imports: [
        DaioMenuComponent,
        DaioButtonIconComponent
    ]
})
export class MenuHostComponent {
    @ViewChild(DaioButtonIconComponent) iconButton!: DaioButtonIconComponent;
    @ViewChild('menu', { read: DaioMenuComponent }) menu!: DaioMenuComponent;
}