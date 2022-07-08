import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss'],
})
export class CountryInputComponent implements OnInit {
  query: string = '';

  constructor() {}

  ngOnInit(): void {}

  search() {}
}
