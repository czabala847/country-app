import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.scss'],
})
export class ShowCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap(({ id }) => this.countryService.searchByCode(id)))
      .subscribe((country) => {
        if (country) {
          this.country = country;
          console.log(country);
        }
      });
  }
}
