import * as actions from "./Constant";
const initialState = {
 
  state: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_STATE_INITIATED:
      return {
        ...state,
       
      };
    case actions.GET_STATE_SUCCESS:
      return {
        ...state,
       
        state: action.payload.data,
      };
    case actions.GET_STATE_ERROR:
      return {
        ...state,
        
      };
    

    default:
      return state;
  }
};
