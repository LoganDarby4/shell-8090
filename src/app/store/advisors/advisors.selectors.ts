import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdvisorsState } from './advisors.reducer';

export const selectAdvisorsState = createFeatureSelector<AdvisorsState>('advisors');

export const selectAllAdvisors = createSelector(
  selectAdvisorsState,
  (state: AdvisorsState) => state.advisors
);

export const selectAdvisorsLoading = createSelector(
  selectAdvisorsState,
  (state: AdvisorsState) => state.loading
);

export const selectAdvisorsError = createSelector(
  selectAdvisorsState,
  (state: AdvisorsState) => state.error
);