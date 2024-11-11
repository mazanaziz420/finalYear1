// store/actions/hiringStaffActions.js
import axios from 'axios';
import { toast } from 'react-toastify';
import {
    CUSTOMER_HIRE_STAFF_REQUEST, CUSTOMER_HIRE_STAFF_SUCCESS, CUSTOMER_HIRE_STAFF_FAILURE,
    VENUE_PROVIDER_HIRE_STAFF_REQUEST, VENUE_PROVIDER_HIRE_STAFF_SUCCESS, VENUE_PROVIDER_HIRE_STAFF_FAILURE,
    CHECK_STAFF_AVAILABILITY_REQUEST, CHECK_STAFF_AVAILABILITY_SUCCESS, CHECK_STAFF_AVAILABILITY_FAILURE,
    ACCEPT_HIRE_REQUEST_REQUEST, ACCEPT_HIRE_REQUEST_SUCCESS, ACCEPT_HIRE_REQUEST_FAILURE,
    REJECT_HIRE_REQUEST_REQUEST, REJECT_HIRE_REQUEST_SUCCESS, REJECT_HIRE_REQUEST_FAILURE,
    GET_HIRE_REQUESTS_BY_HIRER_ID_REQUEST, GET_HIRE_REQUESTS_BY_HIRER_ID_SUCCESS, GET_HIRE_REQUESTS_BY_HIRER_ID_FAILURE,
    GET_HIRE_REQUESTS_FOR_USER_REQUEST, GET_HIRE_REQUESTS_FOR_USER_SUCCESS, GET_HIRE_REQUESTS_FOR_USER_FAILURE
} from '../types';
import { PRODUCTION_BACKEND_URL } from '../urls';

// Customer hires staff
export const customerHireStaff = (staffId, payload, token) => async (dispatch) => {
    dispatch({ type: CUSTOMER_HIRE_STAFF_REQUEST });
    try {
        const response = await axios.post(`${PRODUCTION_BACKEND_URL}/customer/hire/${staffId}`, payload, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        dispatch({ type: CUSTOMER_HIRE_STAFF_SUCCESS, payload: response.data });
        toast.success("Hire request submitted successfully.");
    } catch (error) {
        dispatch({ type: CUSTOMER_HIRE_STAFF_FAILURE, payload: error.message });
        toast.error("Failed to submit hire request.");
    }
};

// Venue provider hires staff
export const venueProviderHireStaff = (staffId, payload, token) => async (dispatch) => {
    dispatch({ type: VENUE_PROVIDER_HIRE_STAFF_REQUEST });
    try {
        const response = await axios.post(`${PRODUCTION_BACKEND_URL}/venue_provider/hire/${staffId}`, payload, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        dispatch({ type: VENUE_PROVIDER_HIRE_STAFF_SUCCESS, payload: response.data });
        toast.success("Hire request submitted successfully.");
    } catch (error) {
        dispatch({ type: VENUE_PROVIDER_HIRE_STAFF_FAILURE, payload: error.message });
        toast.error("Failed to submit hire request.");
    }
};

// Check staff availability
export const checkStaffAvailability = (staffId) => async (dispatch) => {
    dispatch({ type: CHECK_STAFF_AVAILABILITY_REQUEST });
    try {
        const response = await axios.get(`${PRODUCTION_BACKEND_URL}/staff/${staffId}/availability`);
        dispatch({ type: CHECK_STAFF_AVAILABILITY_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: CHECK_STAFF_AVAILABILITY_FAILURE, payload: error.message });
        toast.error("Failed to check staff availability.");
    }
};

// Accept a hire request
export const acceptHireRequest = (hireRequestId, token) => async (dispatch) => {
    dispatch({ type: ACCEPT_HIRE_REQUEST_REQUEST });
    try {
        const response = await axios.get(`${PRODUCTION_BACKEND_URL}/hire_request/${hireRequestId}/accept`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        dispatch({ type: ACCEPT_HIRE_REQUEST_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: ACCEPT_HIRE_REQUEST_FAILURE, payload: error.message });
        toast.error("Failed to accept hire request.");
    }
};

// Reject a hire request
export const rejectHireRequest = (hireRequestId, token) => async (dispatch) => {
    dispatch({ type: REJECT_HIRE_REQUEST_REQUEST });
    try {
        const response = await axios.get(`${PRODUCTION_BACKEND_URL}/hire_request/${hireRequestId}/reject`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        dispatch({ type: REJECT_HIRE_REQUEST_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: REJECT_HIRE_REQUEST_FAILURE, payload: error.message });
        toast.error("Failed to reject hire request.");
    }
};

export const getHireRequestsByHirerId = (token) => async (dispatch) => {
    dispatch({ type: GET_HIRE_REQUESTS_BY_HIRER_ID_REQUEST });
    try {
        const response = await axios.get(
            `${PRODUCTION_BACKEND_URL}/hire_requests_by_hirer_id`,
            {
                headers: { 'Authorization': `Bearer ${token}` }
            }
        );
        dispatch({ type: GET_HIRE_REQUESTS_BY_HIRER_ID_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_HIRE_REQUESTS_BY_HIRER_ID_FAILURE, payload: error.message });
        toast.error("Failed to retrieve hire requests by event type.");
    }
};

export const getHireRequestsForUser = (token) => async (dispatch) => {
    dispatch({ type: GET_HIRE_REQUESTS_FOR_USER_REQUEST });
    try {
        const response = await axios.get(
            `${PRODUCTION_BACKEND_URL}/hire_requests`,
            {
                headers: { 'Authorization': `Bearer ${token}` }
            }
        );
        dispatch({ type: GET_HIRE_REQUESTS_FOR_USER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_HIRE_REQUESTS_FOR_USER_FAILURE, payload: error.message });
        toast.error("Failed to retrieve hire requests by event type.");
    }
};