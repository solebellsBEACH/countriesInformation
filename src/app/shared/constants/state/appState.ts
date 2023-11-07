import { Regions } from '../../interfaces';
import { AppState, ICountriesState } from '../../interfaces/state/appState';
import { DefaultStateInitialValue } from './index'

export const CountriesStateDefaultValue: ICountriesState = {
    ...DefaultStateInitialValue,
    data: { countriesList: [] },
    region: Regions.africa
};
export const AppStateInitialValue: AppState = {
    countries: CountriesStateDefaultValue,
};
