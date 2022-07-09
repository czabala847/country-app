import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  // private apiUrl: string = 'https://restcountries.com/v3.1/';
  private apiUrlV2: string = 'https://restcountries.com/v2/';

  constructor(private http: HttpClient) {}

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'flags,name,capital,population,alpha3Code'
    );
  }

  searchCountry(country: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrlV2}/name/${country}`, {
      params: this.httpParams,
    });
  }

  searchByCapital(capital: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrlV2}/capital/${capital}`, {
      params: this.httpParams,
    });
  }

  searchByCode(id: string): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrlV2}/alpha/${id}`);
  }

  searchByRegional(codeRegional: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrlV2}regionalbloc/${codeRegional}`, {
        params: this.httpParams,
      })
      .pipe(
        tap((response) => {
          console.log(response);
        })
      );
  }
}
