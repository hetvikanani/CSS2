import { combineReducers } from "redux";

import machineGroup from "./MachineGroup/reducer";
import login from "./Login/reducers";
import machine from "./Machine/reducer";
import headquater from "./HeadQuater/reducer"
import state from "./State/Reducer"
const rootReducer = combineReducers({
  machineGroup,
  login,
  machine,
  headquater,
  state,
});
export default rootReducer;
