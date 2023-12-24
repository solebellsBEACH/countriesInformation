import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/interfaces/state/appState";

export const selectAppFeature = createFeatureSelector<AppState>('app');

export const selectApp = createSelector(
    selectAppFeature,
    (state: AppState) => state
);

export const selectAppCountriesList = createSelector(
    selectAppFeature,
    (appState: AppState) => appState.countries.data.countriesList
);

export const selectAppCountryData = createSelector(
    selectAppFeature,
    (appState: AppState) => appState.countries
);