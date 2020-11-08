import User from './user';

export default interface UserState {
  user: User|null;
  requestInProgress: boolean;
  initialRequestDone: boolean;
}
