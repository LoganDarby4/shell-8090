import { createActionGroup, props,emptyProps } from '@ngrx/store';
import { AdvisorDTO } from '@models/advisor.model';

export const AdvisorsActions = createActionGroup({
  source: 'Advisors',
  events: {
    'Load Advisors': emptyProps(),
    'Load Advisors Success': props<{ advisors: AdvisorDTO[] }>(),
    'Load Advisors Failure': props<{ error: Error }>(),
  },
});