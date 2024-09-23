import {
  SUBMIT_VENUE_FORM_FAILURE,
  SUBMIT_VENUE_FORM_REQUEST,
  SUBMIT_VENUE_FORM_SUCCESS,
  GET_VENUES_REQUEST,
  GET_VENUES_SUCCESS,
  GET_VENUES_FAILURE,
  GET_SINGLE_VENUE_REQUEST,
  GET_SINGLE_VENUE_SUCCESS,
  GET_SINGLE_VENUE_FAILURE,
  DELETE_VENUE_REQUEST,
  DELETE_VENUE_SUCCESS,
  DELETE_VENUE_FAILURE
} from "../types";

const initialState = {
  loading: false,
  data: null,
  error: null,
  venues: [],
  venue: null
};

const venueProviderReducer = (state = initialState, action) => {
  switch (action.type) {
      case SUBMIT_VENUE_FORM_REQUEST:
      case GET_VENUES_REQUEST:
      case GET_SINGLE_VENUE_REQUEST:
      case DELETE_VENUE_REQUEST:
          return { ...state, loading: true, error: null };
      case SUBMIT_VENUE_FORM_SUCCESS:
          return { ...state, loading: false, data: action.payload };
      case GET_VENUES_SUCCESS:
          return { ...state, loading: false, venues: action.payload };
      case GET_SINGLE_VENUE_SUCCESS:
          return { ...state, loading: false, venue: action.payload};
      case DELETE_VENUE_SUCCESS:
          return {
              ...state,
              loading: false,
              venues: state.venues.filter(venue => venue._id !== action.payload),
          };
      case SUBMIT_VENUE_FORM_FAILURE:
      case GET_VENUES_FAILURE:
      case GET_SINGLE_VENUE_FAILURE:
      case DELETE_VENUE_FAILURE:
          return { ...state, loading: false, error: action.payload };
      default:
          return state;
  }
};

export default venueProviderReducer;
