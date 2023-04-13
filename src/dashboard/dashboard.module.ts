import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { dashboardRoutes } from "./routing/dashboard.routes";
import { DaioDashboardComponent } from "./components/daio-dashboard/daio-dashboard.component";
import { DaioGlobalHeaderComponent, DaioSidenavComponent, DaioSidenavWidgetComponent } from "daio-ui";

@NgModule({
    declarations: [
        DaioDashboardComponent
    ],
    imports: [
        RouterModule.forChild(dashboardRoutes),
        DaioSidenavComponent,
        DaioSidenavWidgetComponent,
        DaioGlobalHeaderComponent
    ],
    exports: []
})
export class DaioDashboardModule {}