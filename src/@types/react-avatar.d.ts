/* eslint-disable @typescript-eslint/naming-convention */
import { ReactNode } from 'react';
import { ConfigProvider as BaseConfigProvider } from 'react-avatar';

declare module 'react-avatar' {
  export interface ConfigProvider extends BaseConfigProvider {
    children: ReactNode;
  }
}
