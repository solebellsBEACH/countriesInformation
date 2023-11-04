// app.actions.ts
import { createAction, props } from '@ngrx/store';
import { Country } from '../../shared/interfaces/responseBody';
import { Regions } from '../../shared/interfaces';

export const loadCountriesByRegion = createAction('COUNTRIES_REQUEST', props<{ region: Regions }>());
export const loadCountriesByRegionSuccess = createAction(
  'COUNTRIES_SUCCESS',
  props<{ countriesList: Country[] }>(),
);
export const loadCountriesByRegionFailure = createAction('COUNTRIES_FAIL');

export const loadCountriesByName = createAction('COUNTRIES_BY_NAME_REQUEST', props<{ name: string }>());
export const loadCountriesByNameSuccess = createAction(
  'COUNTRIES_SUCCESS',
  props<{ countriesList: Country[] }>(),
);
export const loadCountriesByNameFailure = createAction('COUNTRIES_FAIL');


export const setRegion = createAction('SET_REGION_REQUEST');
export const setRegionSuccess = createAction(
  'SET_REGION_SUCCESS',
  props<{ countriesList: Country[] }>(),
);
export const setRegionFailure = createAction('SET_REGION_FAIL');
