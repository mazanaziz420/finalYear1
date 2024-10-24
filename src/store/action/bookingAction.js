// store/action/bookingActions.js
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  CHECK_AVAILABILITY_REQUEST,
  CHECK_AVAILABILITY_SUCCESS,
  CHECK_AVAILABILITY_FAILURE,
  SEND_BOOKING_REQUEST,
  SEND_BOOKING_SUCCESS,
  SEND_BOOKING_FAILURE,
  SEND_BOOKING_ACCEPT_FAILURE,
  SEND_BOOKING_ACCEPT_REQUEST, 
  SEND_BOOKING_ACCEPT_SUCCESS,
  SEND_BOOKING_REJECT_FAILURE,
  SEND_BOOKING_REJECT_REQUEST, 
  SEND_BOOKING_REJECT_SUCCESS,
  CHECK_BOOKING_REQUEST_FOR_VENUE_PROVIDER_FAILURE,
  CHECK_BOOKING_REQUEST_FOR_VENUE_PROVIDER_REQUEST,
  CHECK_BOOKING_REQUEST_FOR_VENUE_PROVIDER_SUCCESS,
} from '../types';
import { PRODUCTION_BACKEND_URL } from '../urls';

// Action to check availability for a venue
export const checkAvailability = (venueId) => async (dispatch) => {
  dispatch({ type: CHECK_AVAILABILITY_REQUEST });

  try {
    const response = await axios.get(`${PRODUCTION_BACKEND_URL}/booking/venues/${venueId}/availability`);
    dispatch({ type: CHECK_AVAILABILITY_SUCCESS, payload: response.data.not_available_dates });
  } catch (error) {
    dispatch({ type: CHECK_AVAILABILITY_FAILURE, payload: error.message });
    toast.error("Failed to check availability.");
  }
};

// Action to send booking request
export const sendBookingRequest = (bookingData) => async (dispatch) => {
  dispatch({ type: SEND_BOOKING_REQUEST });

  try {
    const response = await axios.post(`${PRODUCTION_BACKEND_URL}/booking/venues/${bookingData.venueId}/book`, bookingData);
    dispatch({ type: SEND_BOOKING_SUCCESS, payload: response.data });
    toast.success("Booking request submitted successfully.");
  } catch (error) {
    dispatch({ type: SEND_BOOKING_FAILURE, payload: error.message });
    toast.error("Failed to submit booking request.");
  }
};

// Action to accept booking
export const acceptBooking = (bookingId) => async (dispatch) => {
  dispatch({ type: ACCEPT_BOOKING_REQUEST });

  try {
    const response = await axios.post(`${PRODUCTION_BACKEND_URL}/booking/${bookingId}/accept`);
    dispatch({ type: ACCEPT_BOOKING_SUCCESS, payload: response.data });
    toast.success("Booking accepted successfully.");
  } catch (error) {
    dispatch({ type: ACCEPT_BOOKING_FAILURE, payload: error.message });
    toast.error("Failed to accept booking.");
  }
};

// Action to reject booking
export const rejectBooking = (bookingId) => async (dispatch) => {
  dispatch({ type: REJECT_BOOKING_REQUEST });

  try {
    const response = await axios.post(`${PRODUCTION_BACKEND_URL}/booking/${bookingId}/reject`);
    dispatch({ type: REJECT_BOOKING_SUCCESS, payload: response.data });
    toast.success("Booking rejected successfully.");
  } catch (error) {
    dispatch({ type: REJECT_BOOKING_FAILURE, payload: error.message });
    toast.error("Failed to reject booking.");
  }
};

// Action to get bookings for the provider
export const getBookingsForProvider = (providerId, status) => async (dispatch) => {
  dispatch({ type: GET_BOOKINGS_FOR_PROVIDER_REQUEST });

  try {
    const response = await axios.post(`${PRODUCTION_BACKEND_URL}/provider/bookings`, { provider_id: providerId, status });
    dispatch({ type: GET_BOOKINGS_FOR_PROVIDER_SUCCESS, payload: response.data.bookings });
  } catch (error) {
    dispatch({ type: GET_BOOKINGS_FOR_PROVIDER_FAILURE, payload: error.message });
    toast.error("Failed to fetch bookings for provider.");
  }
};

