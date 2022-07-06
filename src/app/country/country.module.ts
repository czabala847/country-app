import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';

@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    ShowCountryComponent,
  ],
  imports: [CommonModule],
  exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    ShowCountryComponent,
  ],
})
export class CountryModule {}
