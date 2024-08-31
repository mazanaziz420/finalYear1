import { toast } from 'react-toastify';
import axios from 'axios';

import {
    SUBMIT_VENDOR_FORM_FAILURE,
    SUBMIT_VENDOR_FORM_REQUEST,
    SUBMIT_VENDOR_FORM_SUCCESS,
    GET_VENDORS_REQUEST,
    GET_VENDORS_SUCCESS,
    GET_VENDORS_FAILURE,
    DELETE_VENDOR_REQUEST,
    DELETE_VENDOR_SUCCESS,
    DELETE_VENDOR_FAILURE
} from '../types';

import { PRODUCTION_BACKEND_URL } from "../urls";

export const submitVendorForm = (formData) => async (dispatch) => {
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

        dispatch({ type: SUBMIT_VENDOR_FORM_REQUEST });

        const response = await axios.post(`${PRODUCTION_BACKEND_URL}/vendor/create`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        dispatch({ type: SUBMIT_VENDOR_FORM_SUCCESS, payload: response.data });
        toast.success("Vendor Added Successfully!");
    } catch (error) {
        dispatch({ type: SUBMIT_VENDOR_FORM_FAILURE, payload: error.message });
        toast.error("Failed to add Vendor. Please try again.");
    }
};

export const getVendors = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    try {
        dispatch({ type: GET_VENDORS_REQUEST });

        const response = await axios.get(`${PRODUCTION_BACKEND_URL}/vendor/get_all`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        dispatch({ type: GET_VENDORS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_VENDORS_FAILURE, payload: error.message });
        toast.error("Failed to fetch Vendors. Please try again.");
    }
};

export const deleteVendor = (VENDORId) => async (dispatch) => {
    const token = localStorage.getItem('token');
    try {
        dispatch({ type: DELETE_VENDOR_REQUEST });

        await axios.delete(`${PRODUCTION_BACKEND_URL}/vendor/delete/${VENDORId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        dispatch({ type: DELETE_VENDOR_SUCCESS, payload: VENDORId });
        toast.success("Vendor deleted successfully.");
    } catch (error) {
        dispatch({ type: DELETE_VENDOR_FAILURE, payload: error.message });
        toast.error("Failed to delete Vendor. Please try again.");
    }
};
