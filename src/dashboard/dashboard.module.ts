import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { dashboardRoutes } from "./routing/dashboard.routes";
import { DaioDashboardComponent } from "./components/daio-dashboard/daio-dashboard.component";
import { DaioGlobalHeaderComponent, DaioSidenavComponent, DaioSidenavWidgetComponent } from "daio-ui";
import { CommonModule } from "@angular/common";
import { DaioWidgetNewsComponent } from "daio-ui/src/lib/widget-menu/components/daio-widget-news/daio-widget-news.component";

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
        DaioWidgetNewsComponent
    ],
    exports: []
})
export class DaioDashboardModule {}