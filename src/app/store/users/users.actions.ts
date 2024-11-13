import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserDTO } from '../../core/models/user.model';

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    'Load User': emptyProps(),
    'Load User Success': props<{ user: UserDTO }>(),
    'Load User Failure': props<{ error: Error }>()
  }
});