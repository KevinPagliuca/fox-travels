import { TabOptionsKeysType } from 'contents/Auth/tabOptions';

export interface ILoginPageStore {
  selectedTab: TabOptionsKeysType;
  setSelectedTab: (tab: TabOptionsKeysType) => void;
  handleRegister: () => void;
  handleLogin: () => void;
}
