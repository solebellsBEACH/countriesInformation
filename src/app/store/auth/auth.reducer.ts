// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { AuthStateInitialValue } from 'src/app/shared/constants/state/authState';

export const initialState = AuthStateInitialValue
export const authReducer = createReducer(
  initialState,
);
