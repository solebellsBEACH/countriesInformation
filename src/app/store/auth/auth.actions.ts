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