import React from 'react';

import { Tabs, TabsOptionsType } from 'components/Tabs';

import * as S from './Auth.styles';
import { LoginTab } from './components/LoginTab';
import { RegisterTab } from './components/RegisterTab';
import { loginTabOptionsKeys, TabOptionsKeysType } from './shared/tabOptions';
import { useLoginPageStore } from './store';

const tabOptions: TabsOptionsType[] = [
  { key: loginTabOptionsKeys.login, title: 'Login', content: <LoginTab /> },
  { key: loginTabOptionsKeys.register, title: 'Cadastro', content: <RegisterTab /> },
];

export const AuthContent = () => {
  const { selectedTab, setSelectedTab } = useLoginPageStore();

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
