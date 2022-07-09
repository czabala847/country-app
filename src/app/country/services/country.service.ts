import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  searchCountry(country: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${country}`);
  }

  searchByCapital(capital: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${capital}`);
  }

  searchByCode(id: string): Observable<Country> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/alpha/${id}`)
      .pipe(map((dataCountry) => dataCountry[0]));
  }
}
