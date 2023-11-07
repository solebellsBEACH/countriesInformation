// app.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as countryActions from './country.actions';
import { CountryPageState } from 'src/app/shared/interfaces/state/countryPageState';
import { CountryPageInitialValue } from 'src/app/shared/constants/state/countryPage';

export const initialState: CountryPageState = CountryPageInitialValue;

export const countryReducer = createReducer(
  initialState,
  on(countryActions.loadCountryPage, (state) => ({
    ...state,
    countryPage: {
      ...state.countryPage,
      loading: true,
      error: false,
    },
  })),
  on(countryActions.loadCountryPageSuccess, (state, { country }) => ({
    ...state,
    countryPage: {
      data: { country },
      loading: false,
      error: false,
    },
  })),
  on(countryActions.loadCountryPageFailure, (state) => ({
    ...state,
    countryPage: {
      ...state.countryPage,
      loading: false,
      error: true,
    },
  })),
);
