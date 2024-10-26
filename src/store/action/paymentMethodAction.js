// actions/paymentMethodActions.js
import {
    ADD_PAYMENT_METHOD_REQUEST,
    ADD_PAYMENT_METHOD_SUCCESS,
    ADD_PAYMENT_METHOD_FAILURE,
    GET_PAYMENT_METHOD_REQUEST,
    GET_PAYMENT_METHOD_SUCCESS,
    GET_PAYMENT_METHOD_FAILURE,
    UPDATE_PAYMENT_METHOD_REQUEST,
    UPDATE_PAYMENT_METHOD_SUCCESS,
    UPDATE_PAYMENT_METHOD_FAILURE,
    DELETE_PAYMENT_METHOD_REQUEST,
    DELETE_PAYMENT_METHOD_SUCCESS,
    DELETE_PAYMENT_METHOD_FAILURE,
} from '../types';
import { toast } from 'react-toastify';
import axios from 'axios';
import { 
    PRODUCTION_BACKEND_URL, 
    TESTING_BACKEND_URL 
  } from '../urls';

// Add Payment Method
export const addPaymentMethod = (token, paymentData) => async (dispatch) => {
    dispatch({ type: ADD_PAYMENT_METHOD_REQUEST });
    try {
        const response = await axios.post(`${PRODUCTION_BACKEND_URL}/payment_method/add`, paymentData,{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        dispatch({ type: ADD_PAYMENT_METHOD_SUCCESS, payload: response.data });
        toast.success("Payment Method added successfully.");
    } catch (error) {
        dispatch({ type: ADD_PAYMENT_METHOD_FAILURE, payload: error.response.data });
        toast.error("Failed to add payment method")
    }
};

// Get Payment Methods
export const getPaymentMethods = (token) => async (dispatch) => {
    dispatch({ type: GET_PAYMENT_METHOD_REQUEST });
    try {
        const response = await axios.get(`${PRODUCTION_BACKEND_URL}/payment_method/get`,{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        dispatch({ type: GET_PAYMENT_METHOD_SUCCESS, payload: response.data.payment_methods });
    } catch (error) {
        dispatch({ type: GET_PAYMENT_METHOD_FAILURE, payload: error.response.data });
    }
};

// Update Payment Method
export const updatePaymentMethod = (paymentId, updatedData, token) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_METHOD_REQUEST });
    try {
        const response = await axios.put(`${PRODUCTION_BACKEND_URL}/payment_method/update/${paymentId}`, updatedData,{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        dispatch({ type: UPDATE_PAYMENT_METHOD_SUCCESS, payload: response.data });
        toast.success("Payment Method updated successfully.");
    } catch (error) {
        dispatch({ type: UPDATE_PAYMENT_METHOD_FAILURE, payload: error.response.data });
        toast.error("Failed to update payment method.")
    }
};

// Delete Payment Method
export const deletePaymentMethod = (paymentId, token) => async (dispatch) => {
    dispatch({ type: DELETE_PAYMENT_METHOD_REQUEST });
    try {
        const response = await axios.delete(`${PRODUCTION_BACKEND_URL}/payment_method/delete/${paymentId}`,{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        dispatch({ type: DELETE_PAYMENT_METHOD_SUCCESS, payload: response.data });
        toast.success("Payment Method deleted successfully.");
    } catch (error) {
        dispatch({ type: DELETE_PAYMENT_METHOD_FAILURE, payload: error.response.data });
        toast.error("Failed to delete payment method.");
    }
};
