import { IDefaultStateProps } from ".";
import { Regions } from "..";
import { Country } from "../responseBody";

export interface ICountriesState extends IDefaultStateProps {
    data: { countriesList: Country[] };
    region: Regions;
}
export interface AppState {
    countries: ICountriesState;
}
