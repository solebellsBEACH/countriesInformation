// app.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromCountryActions from './country.actions';
import { Country } from '../../shared/interfaces/responseBody';
import { DataService } from 'src/app/country-page/country-page.service';

@Injectable()
export class CountryEffects {

    loadData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCountryActions.loadCountryPage),
            switchMap((props: { pathName: string }) =>
                this.dataService.getCountry(props.pathName).pipe(
                    map((data: [Country]) => {
                        return fromCountryActions.loadCountryPageSuccess({ country: data[0] })
                    }
                    ),
                    catchError((error) => of(fromCountryActions.loadCountryPageFailure()))
                )
            )
        )
    );

    constructor(private actions$: Actions, private dataService: DataService) { }
}
