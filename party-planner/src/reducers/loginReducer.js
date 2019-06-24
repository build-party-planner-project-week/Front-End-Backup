import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions";

const initialState = {
  loggingIn: false,
  loggedIn: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    default:
      return state;
  }
};
