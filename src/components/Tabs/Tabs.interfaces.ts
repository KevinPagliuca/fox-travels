export type TabsOptionsType = {
  id: number;
  title: string;
  content: JSX.Element;
};

export interface ITabsProps {
  tabOptions: TabsOptionsType[];
}
