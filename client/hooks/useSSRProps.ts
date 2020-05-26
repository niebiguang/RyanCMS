import { useMemo, useRef } from 'react';
import { isServer } from '@/client/utils/tools';

export type PromiseHandler = () => Promise<void>;
export class PromiseList {
  static list: PromiseHandler[] = [];

  static addPromise(p: PromiseHandler) {
    this.list.push(p);
  }

  static clear() {
    this.list = [];
  }

  static async awaitPromiseList() {
    await Promise.all(this.list.map(handler => handler()));
  }
}

export function useSSRProps(handler: PromiseHandler) {
  const ref = useRef(false);
  if (isServer()) {
    if (!ref.current) {
      PromiseList.addPromise(handler);
      ref.current = true;
    }
  }

}
