import { AppState } from "./app.state";
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const appSelect = createFeatureSelector<AppState>('app');

export const selectApp = createSelector(
    appSelect,
    (state: AppState) => state
);

export const selectCountries = createSelector(
    appSelect,
    (state: AppState) => state.countries
);
