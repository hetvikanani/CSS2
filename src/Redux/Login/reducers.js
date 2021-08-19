import * as actions from "./constant";
const initialState = {
  loading: false,
  error: false,
  isAuthenticated: false,
  message: '',
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_INITIATED:
      return {
        ...state,
        isAuthenticated: false,
        message: false,
        error: false,
        loading: true,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        isAuthenticated: true,
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        isAuthenticated: false,
        message: action.error,
      };
    default: {
      return state;
    }
  }
};

export default login;
