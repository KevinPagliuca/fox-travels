import { STORAGE_AUTH_KEY } from 'shared/constants';
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface IUser {
  name?: string;
  email: string;
}

interface IAuthStore {
  user?: IUser;
  isAutenticated: boolean;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
  setUser: (user: IUser) => void;
  handleLogout: () => void;
}

export const useAuthStore = create(
  persist<IAuthStore>(
    (set) => ({
      user: undefined,
      isAutenticated: false,
      _hasHydrated: false,
      setUser: (user) => set({ user, isAutenticated: !!user.email }),
      handleLogout: () => set({ user: undefined, isAutenticated: false }),
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: STORAGE_AUTH_KEY,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
