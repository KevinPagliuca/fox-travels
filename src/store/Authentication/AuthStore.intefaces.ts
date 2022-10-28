import { IUser } from 'interfaces';
import { IAuthResponse } from 'interfaces/auth.interfaces';

export interface IAuthStoreState {
  user?: IUser;
  token?: string;
  isAutenticated: boolean;
}

export interface IAuthStore extends IAuthStoreState {
  updateSession: (res: IAuthResponse) => void;
  handleLogout: () => void;
}
