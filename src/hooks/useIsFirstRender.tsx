import { useRef } from 'react';

export function useIsFirstRender() {
  const isFirst = useRef(false);

  if (!isFirst.current) {
    isFirst.current = true;
    return { isFirstRender: false };
  }

  return { isFirstRender: isFirst.current };
}
