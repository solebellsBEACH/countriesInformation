// app.actions.ts
import { createAction, props } from '@ngrx/store';
import { Country } from '../../shared/interfaces/responseBody';
import { Regions } from '../../shared/interfaces';

export const loadCountries = createAction('COUNTRIES_REQUEST');
export const loadCountriesSuccess = createAction(
  'COUNTRIES_SUCCESS',
  props<{ countriesList: Country[] }>(),
);
export const loadCountriesFailure = createAction('COUNTRIES_FAIL');

export const setRegion = createAction('SET_REGION_REQUEST');
export const setRegionSuccess = createAction(
  'SET_REGION_SUCCESS',
  props<{ countriesList: Country[] }>(),
);
export const setRegionFailure = createAction('SET_REGION_FAIL');
