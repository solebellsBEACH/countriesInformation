// app.actions.ts
import { createAction, props } from '@ngrx/store';
import { Country } from '../shared/interfaces/responseBody';
import { Regions } from '../shared/interfaces';

export const loadCountries = createAction('COUNTRIES_REQUEST', props<{ region: Regions }>());
export const loadCountriesSuccess = createAction('COUNTRIES_SUCCESS', props<{ countriesList: Country[] }>());
export const loadCountriesFailure = createAction('COUNTRIES_FAIL');