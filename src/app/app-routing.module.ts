import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/pages/country/country.component';
import { CapitalComponent } from './country/pages/capital/capital.component';
import { RegionComponent } from './country/pages/region/region.component';
import { ShowCountryComponent } from './country/pages/show-country/show-country.component';

const routes: Routes = [
  {
    path: '',
    component: CountryComponent,
    pathMatch: 'full',
  },
  {
    path: 'capital',
    component: CapitalComponent,
  },
  {
    path: 'region',
    component: RegionComponent,
  },
  {
    path: 'country/:id',
    component: ShowCountryComponent,
  },
  {
    path: '**',
    component: CountryComponent,
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
