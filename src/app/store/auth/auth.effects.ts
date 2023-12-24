// app.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromCountryActions from './auth.actions';
import { AuthDataService } from 'src/app/services/AuthServices/auth.service';
import { GitHubUser } from 'src/app/shared/interfaces/responseBody';

@Injectable()
export class AuthEffects {
    loadData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCountryActions.loadGitHubUser),
            switchMap((props: { username: string }) =>
                this.dataService.getGithubUser(props.username).pipe(
                    map((data: GitHubUser) => {
                        return fromCountryActions.loadGitHubUserSuccess({ user: data });
                    }),
                    catchError((error) => of(fromCountryActions.loadGitHubUserFailure())),
                ),
            ),
        ),
    );
    constructor(
        private actions$: Actions,
        private dataService: AuthDataService,
    ) { }
}
