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
    console.log(region)
    const url = `${this.apiUrl}region/${region}`;
    return this.http.get(url);
  }
}
