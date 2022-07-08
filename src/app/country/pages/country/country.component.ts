import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  query: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  search(query: string) {
    this.error = false;
    this.query = query;
    this.countryService.searchCountry(this.query).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (error) => {
        this.error = true;
        this.countries = [];
      }
    );
  }
}
