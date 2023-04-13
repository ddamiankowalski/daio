import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { IDaioGradientWidget, IDaioWidget } from "daio-ui/src/lib/widget-menu/interfaces/daio-widget.interface";

@Component({
    selector: 'daio-dashboard',
    templateUrl: './daio-dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class DaioDashboardComponent {
    widgets: IDaioWidget[] = [
        { title: 'Weather Component', subtitle: 'Is it windy?', image: '5', description: 'Explore the weather in different places of the world and make sure you always know wh...', yImagePos: '60%' },
        { title: 'Maps Component', subtitle: 'Simply explore the world', description: 'Explore the weather in different places of the world and make sure you always know wh...', image: '2', yImagePos: '30%' },
        { title: 'Your Accounts', subtitle: 'Organise your contacts', description: 'Explore the weather in different places of the world and make sure you always know wh...', image: '6', yImagePos: '0%' },
    ];

    gradientWidgets: IDaioGradientWidget[] = [
        { title: 'Daily Journal' }
    ];
}