import {
  REGISTER,
  ERROR,
  GOOGLE_OAUTH,
  FACEBOOK_OAUTH,
  EMAIL_VERIFICATION,
  LOCAL_LOGIN,
  LOGOUT,
  UNAUTHORIZED,
  REMOVE_MESSAGE
} from "../actions/types";
const DEFAULT_STATE = {
  isAuthenticated: false,
  error: "",
  token: "",
  success: ""
};

export default (state = DEFAULT_STATE, action) => {
  if (action.type === REGISTER) {
    return {
      ...state,
      isAuthenticated: false,
      error: action.error,
      success: action.success
    };
  } else if (action.type === ERROR) {
    return {
      ...state,
      error: action.payload,
      isAuthenticated: false,
      token: ""
    };
  } else if (action.type === GOOGLE_OAUTH) {
    if (action.payload !== null) {
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        error: action.error,
        success: action.success
      };
    } else {
      return {
        ...state,
        token: action.payload,
        isAuthenticated: false,
        error: action.error,
        success: action.success
      };
    }
  } else if (action.type === FACEBOOK_OAUTH) {
    if (action.payload !== null) {
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        error: action.error,
        success: action.success
      };
    } else {
      return {
        ...state,
        token: action.payload,
        isAuthenticated: false,
        error: action.error,
        success: action.success
      };
    }
  } else if (action.type === LOCAL_LOGIN) {
    if (action.payload !== null) {
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        error: action.error,
        success: action.success
      };
    } else {
      return {
        ...state,
        token: action.payload,
        isAuthenticated: false,
        error: action.error,
        success: action.success
      };
    }
  } else if (action.type === EMAIL_VERIFICATION) {
    return {
      ...state,
      token: action.payload,
      error: action.error,
      success: action.success,
      isAuthenticated: false
    };
  } else if (action.type === LOGOUT) {
    return {
      ...state,
      token: null,
      error: action.error,
      success: action.success,
      isAuthenticated: false
    };
  } else if (action.type === UNAUTHORIZED) {
    return {
      ...state,
      token: null,
      isAuthenticated: false,
      error: action.error
    };
  } else if (action.type === REMOVE_MESSAGE) {
    return { ...state, error: "", success: "" };
  }
  return state;
};
