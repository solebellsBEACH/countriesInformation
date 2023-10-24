import { Country } from "./responseBody";

export const DefaultStateInitialValue: IDefaultStateProps = {
    loading: false,
    error: false,
}

export interface AppState {
    countries: ICountriesState
    countryPage: ICountryPageState
}

export interface IDefaultStateProps {
    loading: boolean;
    error: boolean;
}

export interface ICountriesState extends IDefaultStateProps {
    data: { countriesList: Country[] }
}

export const CountriesStateDefaultValue: ICountriesState = {
    ...DefaultStateInitialValue,
    data: { countriesList: [] },
}

export interface ICountryPageState extends IDefaultStateProps {
    data: { country: Country | null }
}
export const CountryPageStateDefaultValue: ICountryPageState = {
    ...DefaultStateInitialValue,
    data: { country: null },
}

export const AppStateInitialValue: AppState = {
    countries: CountriesStateDefaultValue,
    countryPage: CountryPageStateDefaultValue,
}
