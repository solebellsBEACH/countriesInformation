import { createSelector, createFeatureSelector } from "@ngrx/store";
import { ILocation } from "src/app/shared/interfaces";
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

export const selectCountryLocation = createSelector(
    selectCountryPageFeature,
    (state: CountryPageState) => {
        const { country } = state.countryPage.data
        let location: ILocation | null = null;
        if (country?.latlng) location = {
            latitude: country.latlng[0],
            longitude: country.latlng[1],
        };
        return location;
    }
);

