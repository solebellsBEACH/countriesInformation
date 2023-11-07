
import { AppState } from './appState';
import { CountryPageState } from './countryPageState';

export interface IStore {
  app: AppState;
  country: CountryPageState;
}

export interface IDefaultStateProps {
  loading: boolean;
  error: boolean;
}
