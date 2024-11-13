import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AccountDTO } from '@core/models/account.model';

export const AccountsActions = createActionGroup({
  source: 'Accounts',
  events: {
    'Load Accounts': emptyProps(),
    'Load Accounts Success': props<{ accounts: AccountDTO[] }>(),
    'Load Accounts Failure': props<{ error: Error }>(),
  },
});