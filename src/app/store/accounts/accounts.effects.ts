import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AccountsActions } from './accounts.actions';
import { AccountsService } from '@core/api/accounts.service';

@Injectable()
export class AccountsEffects {
  loadAccounts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountsActions.loadAccounts),
      switchMap(() => this.accountsService.getAccounts()
        .pipe(
          map(accounts => AccountsActions.loadAccountsSuccess({ accounts })),
          catchError(error => of(AccountsActions.loadAccountsFailure({ error })))
        ))
    )
  });

  constructor(
    private actions$: Actions,
    private accountsService: AccountsService
  ) {}
}