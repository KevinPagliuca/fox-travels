export type TabsOptionsType = {
  key: string;
  title: string;
  content: JSX.Element;
};

export interface ITabsProps {
  tabOptions: TabsOptionsType[];
  defaultActiveKey?: string;
  selectedTabKey?: string;
  onValueChange?: (key: string) => void;
}
