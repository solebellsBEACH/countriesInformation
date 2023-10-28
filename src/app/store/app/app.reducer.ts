// app.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.actions';
import { AppState, AppStateInitialValue } from '../../shared/interfaces/state';

export const initialState: AppState = AppStateInitialValue;

export const appReducer = createReducer(
  initialState,
  on(appActions.loadCountries, (state) => ({
    ...state,
    countries: {
      ...state.countries,
      loading: true,
      error: false,
    },
  })),
  on(appActions.loadCountriesSuccess, (state, { countriesList }) => ({
    ...state,
    countries: {
      ...state.countries,
      data: { countriesList },
      loading: false,
      error: false,
    },
  })),
  on(appActions.loadCountriesFailure, (state) => ({
    ...state,
    countries: {
      ...state.countries,
      loading: false,
      error: true,
    },
  })),
);
