import { IUser } from './user.interfaces';

export interface IAuthResponse {
  user: IUser;
  token: string;
}
