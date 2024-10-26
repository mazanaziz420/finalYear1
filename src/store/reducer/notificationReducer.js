import {
    NEW_NOTIFICATION,
    MARK_AS_READ,
    MARK_ALL_AS_READ,
    FETCH_NOTIFICATIONS,
    FETCH_NOTIFICATIONS_SUCCESS,
    FETCH_NOTIFICATIONS_FAILURE
  } from '../types';
  
  const initialState = {
    notifications: [],
    loading: false,
    error: null
  };
  
  export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_NOTIFICATIONS:
        return { ...state, loading: true, error: null };
  
      case FETCH_NOTIFICATIONS_SUCCESS:
        return { ...state, loading: false, notifications: action.payload };
  
      case FETCH_NOTIFICATIONS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      case NEW_NOTIFICATION:
        return { ...state, notifications: [action.payload, ...state.notifications] };
  
      case MARK_AS_READ:
        return {
          ...state,
          notifications: state.notifications.map(notification =>
            notification._id === action.payload ? { ...notification, is_read: true } : notification
          )
        };
  
      case MARK_ALL_AS_READ:
        return {
          ...state,
          notifications: state.notifications.map(notification => ({ ...notification, is_read: true }))
        };
  
      default:
        return state;
    }
  }