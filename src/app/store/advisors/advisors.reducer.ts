import { AdvisorDTO } from '@core/models/advisor.model';
import { AdvisorsActions } from './advisors.actions';
import { createFeature, createReducer, on } from '@ngrx/store';

export interface AdvisorsState {
  advisors: AdvisorDTO[];
  loading: boolean;
  error: Error | null;
}

export const initialState: AdvisorsState = {
  advisors: [],
  loading: false,
  error: null,
};

export const advisorsFeature = createFeature({
  name: 'advisors',
  reducer: createReducer(
    initialState,
    on(AdvisorsActions.loadAdvisors, (state): AdvisorsState => ({ ...state, loading: true })),
    on(AdvisorsActions.loadAdvisorsSuccess, (state, { advisors }): AdvisorsState => ({ 
      ...state, 
      advisors,
      loading: false 
    })),
    on(AdvisorsActions.loadAdvisorsFailure, (state, { error }): AdvisorsState => ({ 
      ...state, 
      error,
      loading: false 
    }))
  )
});
