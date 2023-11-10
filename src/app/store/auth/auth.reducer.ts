// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { AuthStateInitialValue } from 'src/app/shared/constants/state/authState';
import * as authActions from './auth.actions'

export const initialState = AuthStateInitialValue
export const authReducer = createReducer(
  initialState,
  on(authActions.loadGitHubUser, (state) => ({
    ...state,
    githubUser: {
      ...state.githubUser,
      loading: true,
      error: false,
    },
  })),
  on(authActions.loadGitHubUserSuccess, (state, { user }) => ({
    ...state,
    githubUser: {
      data: user,
      loading: false,
      error: false,
    },
  })),
  on(authActions.loadGitHubUserFailure, (state) => ({
    ...state,
    githubUser: {
      ...state.githubUser,
      loading: false,
      error: true,
    },
  })),
);
