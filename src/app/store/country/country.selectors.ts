import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CountryPageState } from "src/app/shared/interfaces/state/countryPageState";

export const selectCountryPageFeature = createFeatureSelector<CountryPageState>('country');

export const selectCountryPageState = createSelector(
    selectCountryPageFeature,
    (state: CountryPageState) => state.countryPage
);

export const selectCountryPageData = createSelector(
    selectCountryPageFeature,
    (state: CountryPageState) => state.countryPage.data.country
);