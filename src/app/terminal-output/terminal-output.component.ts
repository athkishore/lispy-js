import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-terminal-output',
  templateUrl: './terminal-output.component.html',
  styleUrls: ['./terminal-output.component.css']
})
export class TerminalOutputComponent implements OnInit {

  @Input() contents: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
