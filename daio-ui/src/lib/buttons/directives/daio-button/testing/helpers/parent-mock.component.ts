import { Component, ViewChild } from "@angular/core";
import { DaioButtonDirective } from "../../daio-button.directive";

@Component({
    standalone: true,
    imports: [DaioButtonDirective],
    selector: 'daio-mock-parent-button',
    template: `<button (click)="clickHandler()" daioButton>testvalue</button>`,
})
export class ParentMockComponent {
    @ViewChild(DaioButtonDirective) directive!: DaioButtonDirective;

    clickHandler(): void {
        console.log('clicked!');
    };
}

@Component({
    standalone: true,
    imports: [DaioButtonDirective],
    selector: 'daio-mock-wrong-parent-button',
    template: `<div (click)="clickHandler()" daioButton>testvalue</div>`,
})
export class ParentMockWrongComponent {
    @ViewChild(DaioButtonDirective) directive!: DaioButtonDirective;

    clickHandler(): void {
        console.log('clicked!');
    };
}