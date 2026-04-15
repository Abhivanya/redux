const state = {
  count: 0,
};

// reducer

function reducer(state = state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function createStore(reducer) {
  let state;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  //   dispatch action for intital store state intialization
  dispatch({ type: "@@INIT" });

  return { getState, dispatch, subscribe };
}

const store = createStore(reducer);

state.dispatch({ type: "increment" });
state.dispatch({ type: "increment" });
state.dispatch({ type: "decrement" });
