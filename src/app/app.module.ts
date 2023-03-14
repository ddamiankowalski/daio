import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DaioButtonDirective } from 'daio-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DaioButtonDirective
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
