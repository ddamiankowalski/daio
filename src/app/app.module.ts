import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DaioButtonComponent, DaioButtonFlatComponent, DaioButtonBasicComponent, DaioIconComponent, DaioCheckboxComponent, DaioInputComponent, DaioSidenavComponent, DaioCardComponent, DaioCardImageDirective, DaioCardContentComponent, DaioCardButtonsComponent, DaioButtonTextComponent, DaioCardHeaderActionsComponent, DaioGlobalHeaderComponent, DaioButtonIconComponent, DaioOverlayComponent, DaioSidenavWidgetComponent } from 'daio-ui';

import { AppComponent } from './app.component';
import { DaioCardHeaderAvatarDirective, DaioCardHeaderComponent } from 'daio-ui/src/lib/card/components/daio-card-header/daio-card-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot([
      { 
        path: '', 
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DaioDashboardModule) 
      }
    ]),
    BrowserModule,
    DaioButtonComponent,
    DaioButtonFlatComponent,
    DaioButtonBasicComponent,
    DaioIconComponent,
    DaioCheckboxComponent,
    FormsModule,
    ReactiveFormsModule,
    DaioInputComponent,
    DaioSidenavComponent,
    DaioCardComponent,
    DaioCardHeaderComponent,
    DaioCardImageDirective,
    DaioCardHeaderAvatarDirective,
    DaioCardContentComponent,
    DaioCardButtonsComponent,
    DaioButtonTextComponent,
    DaioCardHeaderActionsComponent,
    DaioGlobalHeaderComponent,
    DaioButtonIconComponent,
    DaioOverlayComponent,
    DaioSidenavWidgetComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
