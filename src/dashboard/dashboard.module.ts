import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './routing/dashboard.routes';
import { DaioDashboardComponent } from './components/daio-dashboard/daio-dashboard.component';
import { DaioGlobalHeaderComponent, DaioSidenavComponent } from 'daio-ui';
import { CommonModule } from '@angular/common';
import { DaioSidenavWidgetComponent } from '../../daio-ui/src/lib/sidenav/components/daio-sidenav-widget/daio-sidenav-widget.component';

@NgModule({
  declarations: [DaioDashboardComponent],
  imports: [
    RouterModule.forChild(dashboardRoutes),
    CommonModule,
    DaioSidenavComponent,
    DaioGlobalHeaderComponent,
    DaioSidenavWidgetComponent,
  ],
  exports: [],
})
export class DaioDashboardModule {}
