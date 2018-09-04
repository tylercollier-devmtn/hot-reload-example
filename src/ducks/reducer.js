const initialState = {
  globalCounter: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, globalCounter: state.globalCounter + 1 };
    default:
      return state;
  }
}

export function increment() {
  return { type: 'INCREMENT' }
}
