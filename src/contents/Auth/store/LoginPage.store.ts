import create from 'zustand';

import { loginTabOptionsKeys, TabOptionsKeysType } from '../shared/tabOptions';

interface ILoginPageStore {
  selectedTab: TabOptionsKeysType;
  setSelectedTab: (tab: TabOptionsKeysType) => void;
  handleRegister: () => void;
  handleLogin: () => void;
}

export const useLoginPageStore = create<ILoginPageStore>((set) => ({
  selectedTab: loginTabOptionsKeys.login,
  setSelectedTab: (tab: TabOptionsKeysType) => set({ selectedTab: tab }),
  handleRegister: () => set({ selectedTab: loginTabOptionsKeys.register }),
  handleLogin: () => set({ selectedTab: loginTabOptionsKeys.login }),
}));
