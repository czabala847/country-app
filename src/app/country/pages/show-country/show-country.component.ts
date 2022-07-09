import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.scss'],
})
export class ShowCountryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      if (id) {
        this.countryService.searchByCode(id).subscribe((country) => {
          console.log(country);
        });
      }
    });
  }
}
