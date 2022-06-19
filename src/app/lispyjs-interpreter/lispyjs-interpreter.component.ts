import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { TerminalOutputComponent } from '../terminal-output/terminal-output.component';
import { TerminalInputComponent } from '../terminal-input/terminal-input.component';

/****************Lispy-JS functions and environment variable********/
declare var parse: any;
declare var evaluate: any;
declare var lispstr: any;
//declare var env: any;
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
  value: string;
  env: Object;
  currentLine: string = '';
  clickedCount: number = 0;
  constructor() {
    this.value = '';
    this.env = standard_env();
  }
  ngOnInit() {
    console.log('interpreter comp initialised with prompt: ', this.prompt);
  }
  ngOnChange() {
  }
  ngAfterViewInit(){
  }
  onLineChange(){
    this.outputTextBufferArr.push(this.prompt + this.currentLine);
    var value = evaluate(parse(this.currentLine), this.env);
    console.log(this.env);
    this.outputTextBufferArr.push(lispstr(value));
    if (this.outputTextBufferArr.length > this.numLines) {
      this.outputTextBufferArr = this.outputTextBufferArr.slice(2);
    }
  }
  makeInputActive(){
    // dummy click count to trigger focus of input
    this.clickedCount++;
  }
}
