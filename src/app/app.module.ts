import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DaioButtonComponent, DaioButtonFlatComponent, DaioButtonBasicComponent } from 'daio-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DaioButtonComponent,
    DaioButtonFlatComponent,
    DaioButtonBasicComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
