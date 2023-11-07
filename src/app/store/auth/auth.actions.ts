// app.actions.ts
import { createAction, props } from '@ngrx/store';
import { GitHubUser } from '../../shared/interfaces/responseBody';

export const loadGitHubUser = createAction('GITHUB_USER_REQUEST', props<{ username: string }>());
export const loadGitHubUserSuccess = createAction(
  'GITHUB_USER_SUCCESS',
  props<{ user: GitHubUser | null }>(),
);
export const loadGitHubUserFailure = createAction('GITHUB_USER_FAIL');