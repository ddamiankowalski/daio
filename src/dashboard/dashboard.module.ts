import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { dashboardRoutes } from "./routing/dashboard.routes";
import { DaioDashboardComponent } from "./components/daio-dashboard/daio-dashboard.component";
import { DaioGlobalHeaderComponent, DaioSidenavComponent, DaioSidenavWidgetComponent } from "daio-ui";
import { DaioWidgetGradientComponent } from "daio-ui/src/lib/widget-menu/components/daio-widget-gradient/daio-widget-gradient.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        DaioDashboardComponent
    ],
    imports: [
        RouterModule.forChild(dashboardRoutes),
        CommonModule,
        DaioSidenavComponent,
        DaioSidenavWidgetComponent,
        DaioGlobalHeaderComponent,
        DaioWidgetGradientComponent
    ],
    exports: []
})
export class DaioDashboardModule {}