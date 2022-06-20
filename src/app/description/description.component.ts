import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})

export class DescriptionComponent implements OnInit {
  @Input() page: number;
  constructor() {
    this.page = 0;
  }

  ngOnInit(): void {
  }

  nextPage(): void {
    this.page++;
  }

  prevPage(): void {
    this.page--;
  }

}
