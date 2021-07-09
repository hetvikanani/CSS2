// import actions from "../Machine/action";
// import {actions} from "../Machine/action";
import * as actions from "./constant";
const initialState={
    loading:false,
    machines:[],
}

export default (state = initialState, action)=>{
   switch (action.type) {
    case actions.GET_MACHINE_INITIATED:
              return {
                ...state,
                // isAuthenticated: false,
                // message: false,
                // error: false,
                // loading: true,
              };
              case actions.GET_MACHINE_SUCCESS:
                return {
                  ...state,
                  // isAuthenticated: false,
                  // message: false,
                  // error: false,
                  // loadnig: true,
                  machines:action.payload.data
                };
                case actions.GET_MACHINE_ERROR:
                    return {
                      ...state,
                      // isAuthenticated: false,
                      // message: false,
                      // error: false,
                      // loading: true,
                    };
                    case actions.POST_MACHINE_INITIATED:
              return {
                ...state,
                // isAuthenticated: false,
                // message: false,
                // error: false,
                // loading: true,
              };
              case actions.POST_MACHINE_SUCCESS:
                return {
                  ...state,
                  // isAuthenticated: false,
                  // message: false,
                  // error: false,
                  // loadnig: true,
                  machines:action.payload.data
                };
                case actions.POST_MACHINE_ERROR:
                    return {
                      ...state,
                      // isAuthenticated: false,
                      // message: false,
                      // error: false,
                      // loading: true,
                    };
          
            default:
                return state;
            }
          
    

}

