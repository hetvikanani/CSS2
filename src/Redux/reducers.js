import { combineReducers } from "redux";

import machineGroup from "./MachineGroup/reducer";
import login from "./Login/reducers";
import machine from "./Machine/reducer";

const rootReducer = combineReducers({
  machineGroup,
  login,
  machine,
});
export default rootReducer;
