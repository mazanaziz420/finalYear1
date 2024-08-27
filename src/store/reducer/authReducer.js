import {
    LOGIN,
    LOGIN_ERROR,
    LOGOUT,
    AUTH_SET_LOADING,
    AUTH_NOTIFICATION,
  } from '../types';
  
  const initialState = {
    user: null,
    token: null,
    loading: false,
    notification: null,
    error: null,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN:
        // Store both token and user details in the state
        return { 
          ...state, 
          token: action.payload.token, 
          user: action.payload.user, 
          error: null 
        };
      case LOGIN_ERROR:
        return { ...state, token: null, user: null, error: action.payload };
      case LOGOUT:
        // Clear token and user details on logout
        return { ...state, token: null, user: null };
      case AUTH_SET_LOADING:
        return { ...state, loading: action.payload };
      case AUTH_NOTIFICATION:
        return { ...state, notification: action.payload };
      default:
        return state;
    }
  }
  