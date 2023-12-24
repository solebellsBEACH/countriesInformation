import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AuthState } from "src/app/shared/interfaces/state/authState";

export const selectAuthFeature = createFeatureSelector<AuthState>('auth');

export const selectAuth = createSelector(
    selectAuthFeature,
    (state: AuthState) => state
);

export const selectAuthGithubUser = createSelector(
    selectAuth,
    (authState: AuthState) => authState.githubUser
);
