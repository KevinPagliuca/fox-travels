import { IAuthStore } from './AuthStore.intefaces';

export const getAuthUser = (state: IAuthStore) => {
  return { isAutenticated: state.isAutenticated, user: state.user };
};
