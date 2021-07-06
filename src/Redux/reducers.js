import { combineReducers } from "redux";

import MachineGroup from "./MachineGroup/reducer";
import login from "./Login/reducers"
const rootReducer = combineReducers({
MachineGroup, login
});
export default rootReducer;