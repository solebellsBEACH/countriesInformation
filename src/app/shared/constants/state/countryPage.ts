import { CountryPageState, ICountryPageState } from "../../interfaces/state/countryPageState";
import { DefaultStateInitialValue } from './index'

export const CountryPageStateDefaultValue: ICountryPageState = {
    ...DefaultStateInitialValue,
    data: { country: null },
};

export const CountryPageInitialValue: CountryPageState = {
    countryPage: CountryPageStateDefaultValue,
};
