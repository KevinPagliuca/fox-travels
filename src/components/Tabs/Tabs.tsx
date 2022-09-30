import React from 'react';

import { ITabsProps } from './Tabs.interfaces';
import * as S from './Tabs.styles';

export const Tabs = ({ tabOptions }: ITabsProps) => {
  return (
    <S.TabsContainer>
      <S.TabsOptionsContainer>
        {tabOptions.map((item) => (
          <S.TabOption key={item.id} value={item.id.toString()}>
            {item.title}
          </S.TabOption>
        ))}
      </S.TabsOptionsContainer>
      {tabOptions.map((item) => (
        <S.TabContent key={item.id} value={item.id.toString()}>
          {item.content}
        </S.TabContent>
      ))}
    </S.TabsContainer>
  );
};
