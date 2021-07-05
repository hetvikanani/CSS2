import { combineReducers } from "redux";

import Machine from "./MachineGroup/reducer";
import login from "./Login/reducers"
const rootReducer = combineReducers({
Machine, login
});
export default rootReducer;