import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LispyjsInterpreterComponent } from './lispyjs-interpreter/lispyjs-interpreter.component';
import { NgTerminalModule } from 'ng-terminal';

@NgModule({
  declarations: [
    AppComponent,
    LispyjsInterpreterComponent
  ],
  imports: [
    BrowserModule,
    NgTerminalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
