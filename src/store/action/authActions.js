import axios from 'axios';
import { toast } from 'react-toastify';
import {
  LOGIN,
  LOGIN_ERROR,
  LOGOUT,
  AUTH_SET_LOADING,
  AUTH_NOTIFICATION,
} from '../types';
import { 
  PRODUCTION_BACKEND_URL, 
  TESTING_BACKEND_URL 
} from '../urls';

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: AUTH_SET_LOADING, payload: true });

  try {
    const response = await axios.post(`${PRODUCTION_BACKEND_URL}/login`, { email, password });
    const { token, user } = response.data;

    // Save token and user details in localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    // Dispatch login action with user details
    dispatch({ type: LOGIN, payload: { token, user } });

    // Return success response
    return { success: true };
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error.response.data.message });
    return { success: false, message: error.response.data.message };
  } finally {
    dispatch({ type: AUTH_SET_LOADING, payload: false });
  }
};

  

export const signup = (userData) => async (dispatch) => {
  dispatch({ type: AUTH_SET_LOADING, payload: true });

  try {
    const response = await axios.post('https://evee-backend.vercel.app/signup', userData);
    dispatch({ type: AUTH_NOTIFICATION, payload: response.data.message });
    toast.success("Signup successful! Verification email sent.");
  } catch (error) {
    toast.error(error.response.data.message);
  } finally {
    dispatch({ type: AUTH_SET_LOADING, payload: false });
  }
};

export const getVerificationCode = (email) => async (dispatch) => {
  try {
    const response = await axios.post('https://evee-backend.vercel.app/get_vcode', { email });
    console.log(response);
    toast.success("Verification code sent!");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const verifyCode = (email, verification_code) => async (dispatch) => {
  try {
    const response = await axios.post('https://evee-backend.vercel.app/reset_password/verify', { email, verification_code });
    toast.success("Verification successful!");
    return true;  // Indicate success
  } catch (error) {
    toast.error(error.response.data.message);
    return false; // Indicate failure
  }
};

export const resetPassword = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('https://evee-backend.vercel.app/reset_password/update', { email, password });
    toast.success("Password reset successful!");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
