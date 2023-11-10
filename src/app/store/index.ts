import { IRootStore } from "../shared/interfaces/state";
import { appReducer } from "./app/app.reducer";
import { authReducer } from "./auth/auth.reducer";
import { countryReducer } from "./country/country.reducer";

export const rootStore: IRootStore = { app: appReducer, country: countryReducer, auth: authReducer }