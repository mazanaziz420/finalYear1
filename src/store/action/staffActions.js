import axios from 'axios';
import { toast } from 'react-toastify';
import {
    ADD_STAFF_REQUEST, ADD_STAFF_SUCCESS, ADD_STAFF_FAILURE,
    GET_STAFF_REQUEST, GET_STAFF_SUCCESS, GET_STAFF_FAILURE,
    GET_ALL_STAFF_REQUEST, GET_ALL_STAFF_SUCCESS, GET_ALL_STAFF_FAILURE,
    EDIT_STAFF_REQUEST, EDIT_STAFF_SUCCESS, EDIT_STAFF_FAILURE,
    DELETE_STAFF_REQUEST, DELETE_STAFF_SUCCESS, DELETE_STAFF_FAILURE,
} from '../types';
import { PRODUCTION_BACKEND_URL } from '../urls';

export const addStaffData = (payload, token) => async (dispatch) => {
    dispatch({ type: ADD_STAFF_REQUEST });
    try {
        const response = await axios.post(`${PRODUCTION_BACKEND_URL}/staff/add-data`, payload, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        dispatch({ type: ADD_STAFF_SUCCESS, payload: response.data });
        toast.success("Staff data added successfully.");
    } catch (error) {
        dispatch({ type: ADD_STAFF_FAILURE, payload: error.message });
        toast.error("Failed to add staff data.");
    }
};

export const getStaffData = (staffId, token) => async (dispatch) => {
    dispatch({ type: GET_STAFF_REQUEST });
    try {
        const response = await axios.get(`${PRODUCTION_BACKEND_URL}/staff/get/${staffId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        dispatch({ type: GET_STAFF_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_STAFF_FAILURE, payload: error.message });
        toast.error("Failed to retrieve staff data.");
    }
};

export const getAllStaffData = () => async (dispatch) => {
    dispatch({ type: GET_ALL_STAFF_REQUEST });
    try {
        const response = await axios.get(`${PRODUCTION_BACKEND_URL}/staff/get-all-staff-members-details`);
        dispatch({ type: GET_ALL_STAFF_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_ALL_STAFF_FAILURE, payload: error.message });
        toast.error("Failed to retrieve all staff data.");
    }
};

export const editStaffData = (staffId, payload, token) => async (dispatch) => {
    dispatch({ type: EDIT_STAFF_REQUEST });
    try {
        const response = await axios.put(`${PRODUCTION_BACKEND_URL}/staff/edit-data/${staffId}`, payload, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        dispatch({ type: EDIT_STAFF_SUCCESS, payload: response.data });
        toast.success("Staff data updated successfully.");
    } catch (error) {
        dispatch({ type: EDIT_STAFF_FAILURE, payload: error.message });
        toast.error("Failed to update staff data.");
    }
};

export const deleteStaffData = (staffId, token) => async (dispatch) => {
    dispatch({ type: DELETE_STAFF_REQUEST });
    try {
        const response = await axios.delete(`${PRODUCTION_BACKEND_URL}/staff/delete-data/${staffId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        dispatch({ type: DELETE_STAFF_SUCCESS, payload: response.data });
        toast.success("Staff data deleted successfully.");
    } catch (error) {
        dispatch({ type: DELETE_STAFF_FAILURE, payload: error.message });
        toast.error("Failed to delete staff data.");
    }
};