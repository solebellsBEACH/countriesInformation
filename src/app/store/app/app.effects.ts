// app.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromAppActions from './app.actions';
import { DataService } from '../../home/home.service';
import { Country } from '../../shared/interfaces/responseBody';

@Injectable()
export class AppEffects {

    loadData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromAppActions.loadCountries),
            switchMap((props) =>
                this.dataService.getDataByRegion(props.region).pipe(
                    map((data: Country[]) => {
                        return fromAppActions.loadCountriesSuccess({ countriesList: data.slice(0, 20) })
                    }),
                    catchError((error) => of(fromAppActions.loadCountriesFailure()))
                )
            )
        )
    );

    constructor(private actions$: Actions, private dataService: DataService) { }
}
