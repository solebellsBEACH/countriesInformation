// app.actions.ts
import { createAction, props } from '@ngrx/store';
import { Country } from '../shared/interfaces/responseBody';

export const getCountries = createAction(
    'GET_COUNTRIES',
    props<{ countries: Country[] }>()
);

