import { UserDTO } from '../../../src/app/core/models/user.model';
import { actionsData } from './actions.data';

export const meData: UserDTO = {
  firstName: 'John',
  lastName: 'Doe',
  createdBy: 'John Doe',
  createdDate: '2021-07-01T00:00:00',
  id: 123,
  modifiedBy: 'John Doe',
  modifiedDate: '2021-07-01T00:00',
  quickActions: actionsData,
};
