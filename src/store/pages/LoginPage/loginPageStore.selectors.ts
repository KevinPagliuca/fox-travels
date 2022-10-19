import { ILoginPageStore } from './loginPageStore.interfaces';

export const getTabState = (state: ILoginPageStore) => {
  return { selectedTab: state.selectedTab, setSelectedTab: state.setSelectedTab };
};
