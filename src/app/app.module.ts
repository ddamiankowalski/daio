import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DaioButtonComponent, DaioButtonFlatComponent, DaioButtonBasicComponent, DaioIconComponent } from 'daio-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DaioButtonComponent,
    DaioButtonFlatComponent,
    DaioButtonBasicComponent,
    DaioIconComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
