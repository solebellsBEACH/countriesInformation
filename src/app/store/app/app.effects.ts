// app.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromAppActions from './app.actions';
import { HomeService } from '../../services/HomeServices/home.service';
import { Country } from '../../shared/interfaces/responseBody';

@Injectable()
export class AppEffects {
  loadDataByRegion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAppActions.loadCountriesByRegion),
      switchMap((props) =>
        this.homeService.getDataByRegion(props.region).pipe(
          map((data: Country[]) => {
            return fromAppActions.loadCountriesByRegionSuccess({ countriesList: data.slice(0, 20) });
          }),
          catchError((error) => of(fromAppActions.loadCountriesByRegionFailure())),
        ),
      ),
    ),
  );
  loadDataByName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAppActions.loadCountriesByName),
      switchMap((props) =>
        this.homeService.getDataByName(props.name).pipe(
          map((data: Country[]) => {
            return fromAppActions.loadCountriesByNameSuccess({ countriesList: data.slice(0, 20) });
          }),
          catchError((error) => of(fromAppActions.loadCountriesByNameFailure())),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private homeService: HomeService,
  ) { }
}
