// store/reducers/bookingReducer.js
import {
  CHECK_AVAILABILITY_REQUEST,
  CHECK_AVAILABILITY_SUCCESS,
  CHECK_AVAILABILITY_FAILURE,
  SEND_BOOKING_REQUEST,
  SEND_BOOKING_SUCCESS,
  SEND_BOOKING_FAILURE,
  ACCEPT_BOOKING_REQUEST,
  ACCEPT_BOOKING_SUCCESS,
  ACCEPT_BOOKING_FAILURE,
  REJECT_BOOKING_REQUEST,
  REJECT_BOOKING_SUCCESS,
  REJECT_BOOKING_FAILURE,
  GET_BOOKINGS_FOR_PROVIDER_REQUEST,
  GET_BOOKINGS_FOR_PROVIDER_SUCCESS,
  GET_BOOKINGS_FOR_PROVIDER_FAILURE,
  GET_BOOKINGS_FOR_CUSTOMER_REQUEST,
  GET_BOOKINGS_FOR_CUSTOMER_SUCCESS,
  GET_BOOKINGS_FOR_CUSTOMER_FAILURE,
} from '../types';

const initialState = {
  availableDates: [],
  loading: false,
  error: null,
  bookingSuccess: false,
  bookings: [],
  bookingsForCustomer: [],
};

export default function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_AVAILABILITY_REQUEST:
    case SEND_BOOKING_REQUEST:
    case ACCEPT_BOOKING_REQUEST:
    case REJECT_BOOKING_REQUEST:
    case GET_BOOKINGS_FOR_PROVIDER_REQUEST:
    case GET_BOOKINGS_FOR_CUSTOMER_REQUEST:
      return { ...state, loading: true, error: null };

    case CHECK_AVAILABILITY_SUCCESS:
      return { ...state, loading: false, availableDates: action.payload };

    case SEND_BOOKING_SUCCESS:
      return { ...state, loading: false, bookingSuccess: true };

    case ACCEPT_BOOKING_SUCCESS:
    case REJECT_BOOKING_SUCCESS:
      return { ...state, loading: false, bookingSuccess: true };

    case GET_BOOKINGS_FOR_PROVIDER_SUCCESS:
      return { ...state, loading: false, bookings: action.payload };
      
    case GET_BOOKINGS_FOR_CUSTOMER_SUCCESS:
      return { ...state, loading: false, bookingsForCustomer: action.payload };

    case CHECK_AVAILABILITY_FAILURE:
    case SEND_BOOKING_FAILURE:
    case ACCEPT_BOOKING_FAILURE:
    case REJECT_BOOKING_FAILURE:
    case GET_BOOKINGS_FOR_PROVIDER_FAILURE:
    case GET_BOOKINGS_FOR_CUSTOMER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
