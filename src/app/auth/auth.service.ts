import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthDataService {
    private apiUrl = 'https://api.github.com/';

    constructor(private http: HttpClient) { }

    getGithubUser(username: string): Observable<any> {
        const url = `${this.apiUrl}users/${username}`;
        return this.http.get(url);
    }
}