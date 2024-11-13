import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.reducer';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectUser = createSelector(
  selectUsersState,
  state => state?.user
);

export const selectUserName = createSelector(
  selectUser,
  user => user ? `${user.firstName} ${user.lastName}` : null
);

export const selectQuickActions = createSelector(
  selectUser,
  user => user?.quickActions ?? []
);

export const selectQuickActionsLoading = createSelector(
  selectUsersState,
  (user) => user?.loading ?? false
);