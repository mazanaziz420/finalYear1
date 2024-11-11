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
import { PRODUCTION_BACKEND_URL } from '../urls';

// Action to check availability for a venue
export const checkAvailability = (entity_type, entity_id, token) => async (dispatch) => {
  dispatch({ type: CHECK_AVAILABILITY_REQUEST });

  try {
    const response = await axios.get(`${PRODUCTION_BACKEND_URL}/booking/entities/${entity_type}/${entity_id}/availability`,
      {
          headers: { 'Authorization': `Bearer ${token}` }
      }
    );
    dispatch({ type: CHECK_AVAILABILITY_SUCCESS, payload: response.data.booked_dates });
  } catch (error) {
    dispatch({ type: CHECK_AVAILABILITY_FAILURE, payload: error.message });
    toast.error("Failed to check availability.");
  }
};

// Action to send booking request
export const sendBookingRequest = (entity_type, bookingData, token) => async (dispatch) => {
  dispatch({ type: SEND_BOOKING_REQUEST });

  try {
    const response = await axios.post(`${PRODUCTION_BACKEND_URL}/booking/entities/${entity_type}/${bookingData.venueId}/book`, bookingData,
      {
          headers: { 'Authorization': `Bearer ${token}` }
      }
    );
    dispatch({ type: SEND_BOOKING_SUCCESS, payload: response.data });
    toast.success("Booking request submitted successfully.");
  } catch (error) {
    dispatch({ type: SEND_BOOKING_FAILURE, payload: error.message });
    toast.error("Failed to submit booking request.");
  }
};

// Action to accept booking
export const acceptBooking = (bookingId, token) => async (dispatch) => {
  dispatch({ type: ACCEPT_BOOKING_REQUEST });

  try {
    const response = await axios.post(`${PRODUCTION_BACKEND_URL}/booking/${bookingId}/accept`,
      {},
      {
          headers: { 'Authorization': `Bearer ${token}` }
      }
    );
    dispatch({ type: ACCEPT_BOOKING_SUCCESS, payload: response.data });
    toast.success("Booking accepted successfully.");
  } catch (error) {
    dispatch({ type: ACCEPT_BOOKING_FAILURE, payload: error.message });
    toast.error("Failed to accept booking.");
  }
};

// Action to reject booking
export const rejectBooking = (bookingId, token) => async (dispatch) => {
  dispatch({ type: REJECT_BOOKING_REQUEST });

  try {
    const response = await axios.post(`${PRODUCTION_BACKEND_URL}/booking/${bookingId}/reject`,
      {},
      {
          headers: { 'Authorization': `Bearer ${token}` }
      }
    );
    dispatch({ type: REJECT_BOOKING_SUCCESS, payload: response.data });
    toast.success("Booking rejected successfully.");
  } catch (error) {
    dispatch({ type: REJECT_BOOKING_FAILURE, payload: error.message });
    toast.error("Failed to reject booking.");
  }
};

// Action to get bookings for the provider
export const getBookingsForProvider = (entity_type, token, status) => async (dispatch) => {
  dispatch({ type: GET_BOOKINGS_FOR_PROVIDER_REQUEST });

  try {
    const response = await axios.get(`${PRODUCTION_BACKEND_URL}/booking/entities/${entity_type}/provider/bookings`,
      {
          headers: { 'Authorization': `Bearer ${token}` }
      }
    );
    dispatch({ type: GET_BOOKINGS_FOR_PROVIDER_SUCCESS, payload: response.data.bookings });
  } catch (error) {
    dispatch({ type: GET_BOOKINGS_FOR_PROVIDER_FAILURE, payload: error.message });
    toast.error("Failed to fetch bookings for provider.");
  }
};

// Action to get bookings for the customer
export const getBookingsForCustomer = (token) => async (dispatch) => {
  dispatch({ type: GET_BOOKINGS_FOR_CUSTOMER_REQUEST });

  try {
    const response = await axios.get(`${PRODUCTION_BACKEND_URL}/booking/customer-bookings`,
      {
          headers: { 'Authorization': `Bearer ${token}` }
      }
    );
    console.log('response: ', response.data);
    dispatch({ type: GET_BOOKINGS_FOR_CUSTOMER_SUCCESS, payload: response.data.bookings });
  } catch (error) {
    dispatch({ type: GET_BOOKINGS_FOR_CUSTOMER_FAILURE, payload: error.message });
    toast.error("Failed to fetch bookings for customer.");
  }
};
