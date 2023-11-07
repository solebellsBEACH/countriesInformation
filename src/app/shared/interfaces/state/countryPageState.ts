import { IDefaultStateProps } from ".";
import { Country } from "../responseBody";

export interface ICountryPageState extends IDefaultStateProps {
    data: { country: Country | null };
}

export interface CountryPageState {
    countryPage: ICountryPageState;
}