import { IDefaultStateProps, IStore } from "../../interfaces/state";
import { AppStateInitialValue } from "./appState";
import { AuthStateInitialValue } from "./authState";
import { CountryPageInitialValue } from "./countryPage";

export const DefaultStateInitialValue: IDefaultStateProps = {
    loading: false,
    error: false,
};

export const StoreInitialValue: IStore = {
    app: AppStateInitialValue,
    country: CountryPageInitialValue,
    auth: AuthStateInitialValue
}