import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  getCountry(pathName: string): Observable<any> {
    const url = `${this.apiUrl}name/${pathName}`;
    return this.http.get(url);
  }
}
