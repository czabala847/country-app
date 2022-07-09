import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

interface Region {
  name: string;
  code: string;
}

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent {
  regionActive: Region = {
    name: '',
    code: '',
  };
  newRegions: Region[] = [
    {
      name: 'European Union',
      code: 'EU',
    },
    {
      name: 'European Free Trade Association',
      code: 'EFTA',
    },
    {
      name: 'Caribbean Community',
      code: 'CARICOM',
    },
    {
      name: 'Pacific Alliance',
      code: 'PA',
    },
    {
      name: 'African Union',
      code: 'AU',
    },
    {
      name: 'Union of South American Nations',
      code: 'USAN',
    },
    {
      name: 'Eurasian Economic Union',
      code: 'EEU',
    },
    {
      name: 'Arab League',
      code: 'AL',
    },
    {
      name: 'Association of Southeast Asian Nations',
      code: 'ASEAN',
    },
    {
      name: 'Central American Integration System',
      code: 'CAIS',
    },
    {
      name: 'Central European Free Trade Agreement',
      code: 'CEFTA',
    },
    {
      name: 'North American Free Trade Agreement',
      code: 'NAFTA',
    },
    {
      name: 'South Asian Association for Regional Cooperation',
      code: 'SAARC',
    },
  ];
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  handleSelect(region: Region) {
    if (region.code !== this.regionActive.code) {
      this.regionActive = region;
      this.countries = [];
      this.countryService
        .searchByRegional(this.regionActive.code)
        .subscribe((countries) => {
          this.countries = countries;
        });
    }
  }

  getClassCSS(region: Region) {
    if (this.regionActive) {
      return region.code === this.regionActive.code
        ? 'btn btn-primary'
        : 'btn-outline-primary';
    }

    return 'btn-outline-primary';
  }
}
