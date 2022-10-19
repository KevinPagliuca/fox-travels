import { IUser } from 'interfaces';
import { IAuthResponse } from 'interfaces/auth.interfaces';

export interface IAuthStore {
  user?: IUser;
  token?: string;
  isAutenticated: boolean;
  updateSession: (res: IAuthResponse) => void;
  handleLogout: () => void;
}
