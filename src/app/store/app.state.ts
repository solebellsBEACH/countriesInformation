import { Country } from "../shared/interfaces/responseBody";

export interface AppState {
    countries: ICountriesState
}

export interface IDefaultStateProps {
    loading: boolean;
    error: boolean;
}

export interface ICountriesState extends IDefaultStateProps {
    data: { countriesList: Country[] }
}
export const DefaultStateInitialValue: IDefaultStateProps = {
    loading: false,
    error: false,
}

export const CountriesStateDefaultValue: ICountriesState = {
    ...DefaultStateInitialValue,
    data: { countriesList: [] },
}

export const AppStateInitialValue = {
    countries: CountriesStateDefaultValue
}