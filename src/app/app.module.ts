import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DaioButtonComponent, DaioButtonFlatComponent, DaioButtonBasicComponent, DaioIconComponent, DaioCheckboxComponent, DaioInputComponent } from 'daio-ui';

import { AppComponent } from './app.component';

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
    DaioInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
