import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-terminal-input',
  templateUrl: './terminal-input.component.html',
  styleUrls: ['./terminal-input.component.css']
})
export class TerminalInputComponent implements OnInit {
  @Input() currentLine: string = '';
  @Input() prompt: string = '';
  @Output() currentLineChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

  }

  checkAndSendLine(event: any): void {
    console.log(event.keyCode);
    if (event.keyCode == 13) {
      const el = event.target;
      this.currentLine = el.value;
      this.currentLineChange.emit(el.value);
      this.currentLine = '';
      el.value = '';
    }
  }
}
