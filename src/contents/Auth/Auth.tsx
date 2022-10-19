import React from 'react';

import { Tabs, TabsOptionsType } from 'components/Tabs';

import { getTabState, useLoginPageStore } from '../../store/pages/LoginPage';
import * as S from './Auth.styles';
import { LoginTab } from './components/LoginTab';
import { RegisterTab } from './components/RegisterTab';
import { loginTabOptionsKeys, TabOptionsKeysType } from './tabOptions';

const tabOptions: TabsOptionsType[] = [
  { key: loginTabOptionsKeys.login, title: 'Login', content: <LoginTab /> },
  { key: loginTabOptionsKeys.register, title: 'Cadastro', content: <RegisterTab /> },
];

export const AuthContent = () => {
  const { selectedTab, setSelectedTab } = useLoginPageStore(getTabState);

  return (
    <S.AuthContainer>
      <Tabs
        tabOptions={tabOptions}
        defaultActiveKey={selectedTab}
        selectedTabKey={selectedTab}
        onValueChange={(value) => setSelectedTab(value as TabOptionsKeysType)}
      />
    </S.AuthContainer>
  );
};
