import { useLayoutEffect } from 'react';

import { authStore, initializeAuthStore, updateAuthStore } from 'store/Authentication';
import { IAuthStoreState } from 'store/Authentication/AuthStore.intefaces';

export function useCreateAuthStore(initialState: IAuthStoreState) {
  if (typeof window === 'undefined') return () => initializeAuthStore(initialState);

  const store = updateAuthStore(initialState);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    if (initialState && authStore) {
      authStore.setState({
        ...authStore.getState(),
        ...initialState
      });
    }
  }, [initialState]);

  return () => store;
}
