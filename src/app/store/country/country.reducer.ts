// app.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as countryActions from './country.actions';
import { AppState, AppStateInitialValue } from 'src/app/shared/interfaces/state';

export const initialState: AppState = AppStateInitialValue

export const appReducer = createReducer(
    initialState,
    on(countryActions.loadCountryPage, (state) => ({
        ...state,
        country: {
            ...state.countries,
            loading: true,
            error: false,
        }
    })),
    on(countryActions.loadCountryPageSuccess, (state, { country }) => ({
        ...state,
        country: {
            data: { country },
            loading: false,
            error: false,
        }

    })),
    on(countryActions.loadCountryPageFailure, (state) => (
        {
            ...state,
            country: {
                ...state.countries,
                loading: false,
                error: true
            }
        }
    ))
);
