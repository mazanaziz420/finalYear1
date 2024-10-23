// store/reducer/bookingReducer.js
import {
    CHECK_AVAILABILITY_REQUEST,
    CHECK_AVAILABILITY_SUCCESS,
    CHECK_AVAILABILITY_FAILURE,
    SEND_BOOKING_REQUEST,
    SEND_BOOKING_SUCCESS,
    SEND_BOOKING_FAILURE,
  } from '../types';
  
  const initialState = {
    availableDates: [],
    loading: false,
    error: null,
    bookingSuccess: false,
  };
  
  export default function bookingReducer(state = initialState, action) {
    switch (action.type) {
      case CHECK_AVAILABILITY_REQUEST:
      case SEND_BOOKING_REQUEST:
        return { ...state, loading: true, error: null };
      case CHECK_AVAILABILITY_SUCCESS:
        return { ...state, loading: false, availableDates: action.payload };
      case SEND_BOOKING_SUCCESS:
        return { ...state, loading: false, bookingSuccess: true };
      case CHECK_AVAILABILITY_FAILURE:
      case SEND_BOOKING_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }
  