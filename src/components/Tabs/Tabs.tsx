import React, { useEffect, useState } from 'react';

import { ITabsProps } from './Tabs.interfaces';
import * as S from './Tabs.styles';

export const Tabs = ({
  tabOptions,
  defaultActiveKey,
  selectedTabKey,
  onValueChange
}: ITabsProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultActiveKey ?? tabOptions[0]?.key);

  const getTabOptionIndex = tabOptions.findIndex(item => item.key === selectedTab);

  useEffect(() => {
    onValueChange?.(selectedTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);

  useEffect(() => {
    if (selectedTabKey) setSelectedTab(selectedTabKey);
  }, [selectedTabKey]);

  return (
    <S.TabsContainer value={selectedTab} onValueChange={setSelectedTab}>
      <S.TabsOptionsContainer>
        {tabOptions.map(item => (
          <S.TabOption key={item.key} value={item.key}>
            {item.title}
          </S.TabOption>
        ))}
      </S.TabsOptionsContainer>
      {tabOptions.map((item, index) => (
        <S.TabContent
          key={item.key}
          value={item.key}
          initial="show"
          exit="hide"
          animate={selectedTab === item.key ? 'show' : 'hide'}
          tabIndex={-1}
          variants={{
            show: {
              opacity: 1,
              transition: { type: 'spring', stiffness: 300, duration: 0.3 }
            },
            hide: {
              opacity: 0,
              translateX: getTabOptionIndex > index ? '-100%' : '100%',
              transition: { type: 'spring', duration: 0.3 }
            }
          }}
        >
          {item.content}
        </S.TabContent>
      ))}
    </S.TabsContainer>
  );
};

Tabs.displayName = 'TabsComponent';
