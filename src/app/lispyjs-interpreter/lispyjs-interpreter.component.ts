import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgTerminal, FunctionsUsingCSI } from 'ng-terminal';

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
  @ViewChild('term', { static: true }) child!: NgTerminal;
  currentLine: string;
  value: string;
  env: Object;
  constructor() {
    this.currentLine = '';
    this.value = '';
    this.env = {};
  }
  ngAfterViewInit(){
    //...
    //console.log(lis);
    this.env = standard_env();
    this.child.write(FunctionsUsingCSI.cursorColumn(1) + 'lispy-js> ');
    this.child.keyEventInput.subscribe(e => {
      console.log('keyboard event:' + e.domEvent.keyCode + ', ' + e.key);

      const ev = e.domEvent;
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

      if (ev.keyCode === 13) {
        this.value = evaluate(parse(this.currentLine), this.env);
        var toPrint = typeof this.value == "undefined"? '' : lispstr(this.value);
        this.child.write('\n' + FunctionsUsingCSI.cursorColumn(1) + toPrint + '\n' + FunctionsUsingCSI.cursorColumn(1) + 'lispy-js> '); // \r\n
        this.currentLine = '';
      } else if (ev.keyCode === 8) {
        if (this.child.underlying.buffer.active.cursorX > 10) {
          this.child.write('\b \b');
          this.currentLine = this.currentLine.slice(0,-1);
        }
      } else if (printable) {
        this.currentLine += e.key;
        this.child.write(e.key);
      }
    })
    //...
  }
}

// export class LispyjsInterpreterComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
// }
