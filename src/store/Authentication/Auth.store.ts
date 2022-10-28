import Router from 'next/router';

import { destroyCookie, setCookie } from 'nookies';
import { APP_USER_TOKEN } from 'shared/constants';
import create, { StoreApi, UseBoundStore } from 'zustand';
import createContext from 'zustand/context';

import { IAuthResponse } from 'interfaces/auth.interfaces';

import { IAuthStore, IAuthStoreState } from './AuthStore.intefaces';

export let authStore: UseBoundStore<StoreApi<IAuthStore>>;

const { useStore, Provider } = createContext<StoreApi<IAuthStore>>();

export const initializeAuthStore = (preloadedState: IAuthStoreState) => {
  return create<IAuthStore>(set => ({
    ...preloadedState,
    updateSession: ({ token, user }: IAuthResponse) => {
      if (!!token && user.email) {
        set({ user, isAutenticated: true, token });
        setCookie(null, APP_USER_TOKEN, token, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/'
        });
        Router.push('/');
      } else {
        set({ user: undefined, isAutenticated: false, token: undefined });
        destroyCookie(null, APP_USER_TOKEN);
      }
    },
    handleLogout: () => {
      Router.push('/login');
      set({ user: undefined, isAutenticated: false, token: undefined });
      destroyCookie(null, APP_USER_TOKEN);
    }
  }));
};

export const updateAuthStore = (preloadedState: IAuthStoreState) => {
  return (authStore = authStore ?? initializeAuthStore(preloadedState));
};

export const useAuthStore = useStore;
export const AuthStoreProvider = Provider;
