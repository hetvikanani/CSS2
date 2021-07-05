import { createStore } from "redux";
// import Machine from "./MachineGroup/reducer";
import reducers from "./reducers"

import { loadState, saveState } from "./localstorage";
const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

export { store };
