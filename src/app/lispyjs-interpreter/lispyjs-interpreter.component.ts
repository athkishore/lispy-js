import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { TerminalOutputComponent } from '../terminal-output/terminal-output.component';
import { TerminalInputComponent } from '../terminal-input/terminal-input.component';

/****************Lispy-JS functions and environment variable********/
declare var parse: any;
declare var evaluate: any;
declare var lispstr: any;
declare var env: any;
declare var standard_env: any;
/********End of Lispy-JS functions and environment variable********/

@Component({
  selector: 'app-lispyjs-interpreter',
  templateUrl: './lispyjs-interpreter.component.html',
  styleUrls: ['./lispyjs-interpreter.component.css']
})
export class LispyjsInterpreterComponent implements AfterViewInit{
  @Input() prompt: string = '';
  @Input() numLines: number = 20;
  outputTextBufferArr: Array<string> = [];
  outputTextBuffer: string = '';
  value: string;
  env: Object;
  currentLine: string = '';
  constructor() {
    this.value = '';
    this.env = standard_env();
  }
  ngOnInit() {
    console.log('interpreter comp initialised with prompt: ', this.prompt);
  }
  ngOnChange() {
    console.log(this.currentLine);
  }
  ngAfterViewInit(){
  }
  onLineChange(){
    console.log(this.currentLine);
    this.outputTextBufferArr.push(this.prompt + this.currentLine + '<br>');
    this.outputTextBuffer = this.outputTextBufferArr.join('');
  }
}
