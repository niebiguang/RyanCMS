import React from 'react';
import { createReactionStore } from './reaction';
import { useUser } from './useUser';
import { useLoading } from './reaction/useLoading';

export const {
  Provider,
  useStore,
  useSelector,
  useImmerState,
  getStore,
} = createReactionStore(
  {
    loading: useLoading,
    user: useUser,
  },
  {},
);

export type StoreType = ReturnType<typeof useStore>;

export function StoreProvider({
  children,
  initStore = {},
}: {
  children: React.ReactNode;
  initStore: any;
}) {
  return <Provider initStore={initStore}>{children}</Provider>;
}
