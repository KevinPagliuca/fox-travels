import { IAuthResponse } from 'interfaces/auth.interfaces';
import { destroyCookie } from 'nookies';
import { APP_USER_TOKEN } from 'shared/constants';
import create from 'zustand';

import { IAuthStore } from './AuthStore.intefaces';

export const useAuthStore = create<IAuthStore>((set) => ({
  user: undefined,
  isAutenticated: false,
  token: undefined,
  updateSession: ({ token, user }: IAuthResponse) => {
    set({ user, isAutenticated: !!user.email, token });
  },
  handleLogout: () => {
    set({ user: undefined, isAutenticated: false, token: undefined });
    destroyCookie(null, APP_USER_TOKEN);
  },
}));
