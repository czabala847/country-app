import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss'],
})
export class CapitalComponent implements OnInit {
  query: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  search(query: string) {
    this.error = false;
    this.query = query;
    this.countryService.searchByCapital(this.query).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (error) => {
        this.error = true;
        this.countries = [];
      }
    );
  }

  suggestion(value: string) {
    console.log(value);
  }
}
