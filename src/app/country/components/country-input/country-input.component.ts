import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss'],
})
export class CountryInputComponent implements OnInit {
  query: string = '';

  @Output() onEnter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  search() {
    this.onEnter.emit(this.query);
  }
}
