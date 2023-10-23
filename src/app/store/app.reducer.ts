// app.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
    countries: [],
};

export const appReducer = createReducer(
    initialState,
    on(appActions.getCountries, (state, { countries }) => ({ ...state, countries })),
);
