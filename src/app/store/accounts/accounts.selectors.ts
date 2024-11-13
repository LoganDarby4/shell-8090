import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AccountsState } from './accounts.reducer';
import { chain } from 'lodash';
import { AccountDTO } from '@core/models/account.model';

export const selectAccountsState = createFeatureSelector<AccountsState>('accounts');

export const selectAllAccounts = createSelector(
  selectAccountsState,
  (state: AccountsState) => state.accounts
);

export const selectAccountsLoading = createSelector(
  selectAccountsState,
  (state: AccountsState) => state.loading
);

export const selectAccountsError = createSelector(
  selectAccountsState,
  (state: AccountsState) => state.error
);

export const selectAccountsByInstitution = createSelector(
  selectAllAccounts,
  (accounts: AccountDTO[]) => chain(accounts).groupBy('institutionBrand').toPairs().value()
);

export const selectAccountsByInvestmentType = createSelector(
  selectAllAccounts,
  (accounts: AccountDTO[]) => chain(accounts).groupBy('investmentType').toPairs().value()
);