import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../../core/api/user.service';
import { UsersActions } from './users.actions';

@Injectable()
export class UsersEffects {
  loadUser$ = createEffect(() => { return this.actions$.pipe(
    ofType(UsersActions.loadUser),
    switchMap(() => this.userService.getUser()
      .pipe(
        map(users => UsersActions.loadUserSuccess({ user: users })),
        catchError(error => of(UsersActions.loadUserFailure({ error: error.message })))
      ))
  ) });

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}