import actions from "/action";

const initialState = {
  email: "",
  password: "",
  userDetails: {},
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN: {
      return;
    }
    default: {
      return state;
    }
  }
};

export default login;
