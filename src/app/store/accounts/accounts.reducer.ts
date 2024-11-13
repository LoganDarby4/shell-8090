import { createFeature, createReducer, on } from '@ngrx/store';
import { AccountDTO } from '@core/models/account.model';
import { AccountsActions } from './accounts.actions';

export interface AccountsState {
  accounts: AccountDTO[];
  loading: boolean;
  error: Error | null;
}

export const initialState: AccountsState = {
  accounts: [],
  loading: false,
  error: null,
};

export const accountsFeature = createFeature({
  name: 'accounts',
  reducer: createReducer(
    initialState,
    on(AccountsActions.loadAccounts, (state): AccountsState => ({ 
      ...state, 
      loading: true 
    })),
    on(AccountsActions.loadAccountsSuccess, (state, { accounts }): AccountsState => ({ 
      ...state, 
      accounts,
      loading: false 
    })),
    on(AccountsActions.loadAccountsFailure, (state, { error }): AccountsState => ({ 
      ...state, 
      error,
      loading: false 
    }))
  )
});