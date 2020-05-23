import { useMemo, useRef } from 'react';
import { isServer } from '@/client/utils/tools';

export type PromiseHandler<
  T extends any = { [key: string]: any; }
  > = () => Promise<T>;
export class PromiseList {
  static list: PromiseHandler[] = [];

  static addPromise(p: PromiseHandler) {
    this.list.push(p);
  }

  static clear() {
    this.list = [];
  }

  static async getData() {
    const data = (
      await Promise.all(this.list.map(handler => handler()))
    ).reduce((a, b) => {
      return { ...a, ...b };
    }, {});
    return data;
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
