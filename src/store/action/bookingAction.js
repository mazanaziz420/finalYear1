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
} from '../types';
import { PRODUCTION_BACKEND_URL } from '../urls';

// Action to check availability for a venue
export const checkAvailability = (venueId) => async (dispatch) => {
  dispatch({ type: CHECK_AVAILABILITY_REQUEST });

  try {
    const response = await axios.get(`${PRODUCTION_BACKEND_URL}/venues/${venueId}/availability`);
    dispatch({ type: CHECK_AVAILABILITY_SUCCESS, payload: response.data.available_dates });
  } catch (error) {
    dispatch({ type: CHECK_AVAILABILITY_FAILURE, payload: error.message });
    toast.error("Failed to check availability.");
  }
};

// Action to send booking request
export const sendBookingRequest = (bookingData) => async (dispatch) => {
  dispatch({ type: SEND_BOOKING_REQUEST });

  try {
    const response = await axios.post(`${PRODUCTION_BACKEND_URL}/venues/${bookingData.venueId}/book`, bookingData);
    dispatch({ type: SEND_BOOKING_SUCCESS, payload: response.data });
    toast.success("Booking request submitted successfully.");
  } catch (error) {
    dispatch({ type: SEND_BOOKING_FAILURE, payload: error.message });
    toast.error("Failed to submit booking request.");
  }
};
