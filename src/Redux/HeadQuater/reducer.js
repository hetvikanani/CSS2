  import * as actions from "./constant";
const initialState = {
  loading: false,
  headquaters: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_HEADQUATER_INITIATED:
      return {
        ...state,
        // isAuthenticated: false,
        // message: false,
        // error: false,
        // loading: true,
      };
    case actions.GET_HEADQUATER_SUCCESS:
      return {
        ...state,
        // isAuthenticated: false,
        // message: false,
        // error: false,
        // loadnig: true,
        headquaters: action.payload.data,
      };
    case actions.GET_HEADQUATER_ERROR:
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
};
