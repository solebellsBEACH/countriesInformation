
import { Action, ActionReducer } from '@ngrx/store';
import { AppState } from './appState';
import { AuthState } from './authState';
import { CountryPageState } from './countryPageState';

export interface IStore {
  app: AppState;
  country: CountryPageState;
  auth: AuthState
}

export interface IRootStore {
  app: ActionReducer<AppState, Action>;
  country: ActionReducer<CountryPageState, Action>;
  auth: ActionReducer<AuthState, Action>;
}

export interface IDefaultStateProps {
  loading: boolean;
  error: boolean;
}
