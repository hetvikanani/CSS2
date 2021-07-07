import { combineReducers } from "redux";

import MachineGroup from "./MachineGroup/reducer";
import login from "./Login/reducers"
import Machine from "./Machine/reducer";
const rootReducer = combineReducers({
MachineGroup, login,
// Machine
});
export default rootReducer;