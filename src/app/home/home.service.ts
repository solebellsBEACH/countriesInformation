import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Regions } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) { }

  getDataByRegion(region: Regions): Observable<any> {
    const url = `${this.apiUrl}region/${region}`;
    return this.http.get(url);
  }

  getDataByName(name: string): Observable<any> {
    const url = `${this.apiUrl}name/${name}`;
    return this.http.get(url);
  }
}
