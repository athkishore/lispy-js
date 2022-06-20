import { Component, OnInit, OnChanges, Input, Output, EventEmitter,
  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-terminal-input',
  templateUrl: './terminal-input.component.html',
  styleUrls: ['./terminal-input.component.css']
})
export class TerminalInputComponent implements OnInit {
  @Input() currentLine: string = '';
  @Input() prompt: string = '';
  @Input() active: boolean = false;
  @Input() clickedCount: number = 0;
  @Output() currentLineChange = new EventEmitter<string>();

  @ViewChild('editable') in: any;

  inputHistory: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //console.log(this.in);
  }

  ngOnChanges(changes: any): void {
    if(typeof changes['clickedCount'] !== 'undefined') {
        this.in.nativeElement.focus();
    }
  }

  checkAndSendLine(event: any): void {
    if (event.keyCode == 13) {
      const el = event.target;
      this.currentLine = el.innerText.slice(0,-2);
      console.log(this.currentLine);
      this.currentLineChange.emit(this.currentLine);
      this.inputHistory.push(this.currentLine);
      this.currentLine = '';
      el.innerText = '';
    }
    /*** Todo: Add command history ***/
  }
}
