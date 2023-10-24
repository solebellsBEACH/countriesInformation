// app.actions.ts
import { createAction, props } from '@ngrx/store';
import { Country } from '../shared/interfaces/responseBody';

export const loadCountries = createAction('COUNTRIES_REQUEST');
export const loadCountriesSuccess = createAction('COUNTRIES_SUCCESS', props<{ countriesList: Country[] }>());
export const loadCountriesFailure = createAction('COUNTRIES_FAIL', props<{ error: boolean }>());