import { createFeature, createReducer, on } from '@ngrx/store';
import { UserDTO } from '../../core/models/user.model';
import { UsersActions } from './users.actions';

export interface UsersState {
  user: UserDTO | null;
  loading: boolean;
  error: Error | null;
}

export const initialState: UsersState = {
  user: null,
  loading: false,
  error: null
};

export const usersFeature = createFeature({
  name: 'users',
  reducer: createReducer(
    initialState,
    on(UsersActions.loadUser, (state): UsersState => ({
      ...state,
      loading: true
    })),
    on(UsersActions.loadUserSuccess, (state, { user }): UsersState => ({
      ...state,
      user,
      loading: false
    })),
    on(UsersActions.loadUserFailure, (state, { error }): UsersState => ({
      ...state,
      error,
      loading: false
    }))
  )
});
