import { combineReducers } from "redux";

import MachineGroup from "./MachineGroup/reducer";
import login from "./Login/reducers"
import machine from "./Machine/reducer";


const rootReducer = combineReducers({
MachineGroup, 
login,
machine,
});
export default rootReducer;