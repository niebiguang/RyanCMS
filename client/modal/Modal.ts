export abstract class Modal<T> {
  state: T;
  reducers?: { [key: string]: (state: T, payload: any) => T; };
}
