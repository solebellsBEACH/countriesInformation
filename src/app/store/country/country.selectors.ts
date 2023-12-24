import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CountryPageState } from "src/app/shared/interfaces/state/countryPageState";


export const selectCountryPageFeature = createFeatureSelector<CountryPageState>('country');

export const selectCountryPage = createSelector(
    selectCountryPageFeature,
    (state: CountryPageState) => state
);