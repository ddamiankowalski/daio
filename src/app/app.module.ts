import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DaioButtonComponent, DaioButtonFlatComponent, DaioButtonBasicComponent, DaioIconComponent, DaioCheckboxComponent, DaioInputComponent, DaioSidenavComponent, DaioCardComponent } from 'daio-ui';

import { AppComponent } from './app.component';
import { DaioCardHeaderComponent } from 'daio-ui/src/lib/card/components/daio-card-header/daio-card-header.component';

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
    DaioCardHeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
