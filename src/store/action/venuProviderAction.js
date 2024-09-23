import { toast } from 'react-toastify';
import axios from 'axios';

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
} from '../types';

import { PRODUCTION_BACKEND_URL } from "../urls";

// Action to submit the venue form
export const submitVenueForm = (formData) => async (dispatch) => {
    const token = localStorage.getItem('token');
    try {
        const data = new FormData();

        // Append form data
        for (const key in formData) {
            if (Array.isArray(formData[key])) {
                formData[key].forEach((item) => {
                    data.append(key, item);
                });
            } else if (formData[key] instanceof File) {
                data.append(key, formData[key]);
            } else {
                data.append(key, formData[key]);
            }
        }

        dispatch({ type: SUBMIT_VENUE_FORM_REQUEST });

        const response = await axios.post(`${PRODUCTION_BACKEND_URL}/venueProvider/postdata`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        dispatch({ type: SUBMIT_VENUE_FORM_SUCCESS, payload: response.data });
        toast.success("Venue Added Successfully!");
    } catch (error) {
        dispatch({ type: SUBMIT_VENUE_FORM_FAILURE, payload: error.message });
        toast.error("Failed to add venue. Please try again.");
    }
};

// Action to get the list of venues
export const getVenues = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    try {
        dispatch({ type: GET_VENUES_REQUEST });

        const response = await axios.get(`${PRODUCTION_BACKEND_URL}/venueProvider/get/makeups`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        dispatch({ type: GET_VENUES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_VENUES_FAILURE, payload: error.message });
        toast.error("Failed to fetch venues. Please try again.");
    }
};

// Action to get venue by id
export const getSingleVenue= (id) => async (dispatch) => {
    const token = localStorage.getItem('token');
    try {
        dispatch({ type: GET_SINGLE_VENUE_REQUEST });

        const response = await axios.get(`${PRODUCTION_BACKEND_URL}/venueProvider/get/makeup/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        dispatch({ type: GET_SINGLE_VENUE_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_SINGLE_VENUE_FAILURE, payload: error.message });
        toast.error("Failed to fetch venues. Please try again.");
    }
};


// Action to delete a venue by ID
export const deleteVenue = (venueId) => async (dispatch) => {
    const token = localStorage.getItem('token');
    try {
        dispatch({ type: DELETE_VENUE_REQUEST });

        await axios.delete(`${PRODUCTION_BACKEND_URL}/venueProvider/${venueId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        dispatch({ type: DELETE_VENUE_SUCCESS, payload: venueId });
        toast.success("Venue deleted successfully.");
    } catch (error) {
        dispatch({ type: DELETE_VENUE_FAILURE, payload: error.message });
        toast.error("Failed to delete venue. Please try again.");
    }
};
