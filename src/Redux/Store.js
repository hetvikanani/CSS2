import { createStore,applyMiddleware } from "redux";
// import Machine from "./MachineGroup/reducer";
import reducers from "./reducers"
import thunk  from 'redux-thunk'


import { loadState, saveState } from "./localstorage";
const persistedState = loadState();

const store = createStore(
  reducers,
  applyMiddleware(thunk )
);

store.subscribe(() => {
  saveState(store.getState());
});

export { store };

// import { createStore,applyMiddleware } from "redux";
// import rootReducer from "../rootreducer/index";
// import thunk  from 'redux-thunk'
// const store = createStore(rootReducer,applyMiddleware(thunk ));
// export default store;