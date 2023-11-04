import { Regions } from '.';
import { Country } from './responseBody';

export const DefaultStateInitialValue: IDefaultStateProps = {
  loading: false,
  error: false,
};

export interface IStore {
  app: AppState;
  country: CountryPageState;
}

export interface AppState {
  countries: ICountriesState;
}

export interface CountryPageState {
  countryPage: ICountryPageState;
}

export interface IDefaultStateProps {
  loading: boolean;
  error: boolean;
}

export interface ICountriesState extends IDefaultStateProps {
  data: { countriesList: Country[] };
  region: Regions;
}

export const CountriesStateDefaultValue: ICountriesState = {
  ...DefaultStateInitialValue,
  data: { countriesList: [] },
  region: Regions.africa
};

export interface ICountryPageState extends IDefaultStateProps {
  data: { country: Country | null };
}
export const CountryPageStateDefaultValue: ICountryPageState = {
  ...DefaultStateInitialValue,
  data: { country: null },
};

export const AppStateInitialValue: AppState = {
  countries: CountriesStateDefaultValue,
};

export const CountryPageInitialValue: CountryPageState = {
  countryPage: CountryPageStateDefaultValue,
};
