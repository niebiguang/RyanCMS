export function createReducer<T>(initState: T, matchAction: string) {
  return (state = initState, action: { type: string, payload: T; }) => {
    switch (action.type) {
      case matchAction:
        return action.payload;
      default:
        return state;
    }
  };
}