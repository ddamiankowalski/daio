import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { IDaioWidget } from "daio-ui/src/lib/widget-menu/interfaces/daio-widget.interface";

@Component({
    selector: 'daio-dashboard',
    templateUrl: './daio-dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class DaioDashboardComponent {
    widgets: IDaioWidget[] = [
        { title: 'Weather Component', image: '5', description: 'Explore the weather in different places of the world and make sure you always know wh...', yImagePos: '60%' },
        { title: 'Maps Component', description: 'Explore the weather in different places of the world and make sure you always know wh...', image: '2', yImagePos: '30%' },
        { title: 'Your Accounts', description: 'Explore the weather in different places of the world and make sure you always know wh...', image: '6', yImagePos: '0%' },
    ];
}