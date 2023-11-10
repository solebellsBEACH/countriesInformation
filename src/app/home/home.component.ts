import { Component, OnInit } from '@angular/core';
import { Country } from '../shared/interfaces/responseBody';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Regions } from '../shared/interfaces';
import { IStore } from '../shared/interfaces/state';
import { loadCountriesByRegion } from '../store/app/app.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageHelpers } from '../shared/helpers/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  region$: Observable<Regions>
  countriesList$: Observable<Country[]>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;
  githubLabel: string = 'solebellsBEACH'

  showCountries = false;

  constructor(private store: Store<IStore>, private router: Router) {
    this.countriesList$ = this.store.select((state) => state.app.countries.data.countriesList);
    this.loading$ = this.store.select((state) => state.app.countries.loading);
    this.error$ = this.store.select((state) => state.app.countries.error);
    this.region$ = this.store.select((state) => state.app.countries.region);
  }

  goToMyGitProfile() {
    const externalUrl = 'https://github.com/solebellsBEACH';
    window.open(externalUrl, '_blank');
  }

  ngOnInit(): void {

    const isLogged = StorageHelpers.alreadyIsLogged()

    if (isLogged.success) {
      this.githubLabel = isLogged?.data || 'solebellsBEACH'
      this.region$.subscribe(region => {
        this.store.dispatch(loadCountriesByRegion({ region }));
      })
    } else {
      this.router.navigate(['/home'])
    }
  }
}
