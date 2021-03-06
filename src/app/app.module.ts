import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LispyjsInterpreterComponent } from './lispyjs-interpreter/lispyjs-interpreter.component';
import { NgTerminalModule } from 'ng-terminal';
import { TerminalOutputComponent } from './terminal-output/terminal-output.component';
import { TerminalInputComponent } from './terminal-input/terminal-input.component';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    LispyjsInterpreterComponent,
    TerminalOutputComponent,
    TerminalInputComponent,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    NgTerminalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
