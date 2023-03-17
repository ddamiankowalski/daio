import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DaioButtonComponent } from 'daio-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DaioButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
