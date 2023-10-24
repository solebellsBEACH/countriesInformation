import { createAction, props } from '@ngrx/store';
import { Country } from '../../shared/interfaces/responseBody';

export const loadCountryPage = createAction('COUNTRY_PAGE_REQUEST', props<{ pathName: string }>());
export const loadCountryPageSuccess = createAction('COUNTRY_PAGE_SUCCESS', props<{ country: Country }>());
export const loadCountryPageFailure = createAction('COUNTRY_PAGE_FAIL');