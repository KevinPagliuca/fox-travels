import { loginTabOptionsKeys, TabOptionsKeysType } from 'contents/Auth/tabOptions';
import create from 'zustand';

import { ILoginPageStore } from './loginPageStore.interfaces';

export const useLoginPageStore = create<ILoginPageStore>((set) => ({
  selectedTab: loginTabOptionsKeys.login,
  setSelectedTab: (tab: TabOptionsKeysType) => set({ selectedTab: tab }),
  handleRegister: () => set({ selectedTab: loginTabOptionsKeys.register }),
  handleLogin: () => set({ selectedTab: loginTabOptionsKeys.login }),
}));
