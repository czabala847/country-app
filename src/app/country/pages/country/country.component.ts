import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  query: string = '';
  error: boolean = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  search() {
    this.error = false;
    this.countryService.searchCountry(this.query).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        this.error = true;
      }
    );
  }
}
