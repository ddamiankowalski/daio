import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DaioButtonComponent, DaioButtonFlatComponent, DaioButtonBasicComponent, DaioIconComponent, DaioCheckboxComponent, DaioInputComponent, DaioSidenavComponent, DaioCardComponent, DaioCardImageDirective, DaioCardContentComponent, DaioCardButtonsComponent, DaioButtonTextComponent, DaioCardHeaderActionsComponent, DaioGlobalHeaderComponent, DaioButtonIconComponent, DaioOverlayComponent } from 'daio-ui';

import { AppComponent } from './app.component';
import { DaioCardHeaderAvatarDirective, DaioCardHeaderComponent } from 'daio-ui/src/lib/card/components/daio-card-header/daio-card-header.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
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
    DaioOverlayComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
