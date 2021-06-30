import { createStore } from "redux";
import Machine from "./reducer";
import { loadState, saveState } from "./localstorage";
const persistedState = loadState();

const store = createStore(
  Machine,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

export { store };

