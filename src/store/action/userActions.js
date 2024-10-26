import axios from 'axios';
import { toast } from 'react-toastify';
import {
    UPDATE_USER_REQUEST, 
    UPDATE_USER_FAILURE, 
    UPDATE_USER_SUCCESS,
    DELETE_USER_REQUEST, 
    DELETE_USER_FAILURE, 
    DELETE_USER_SUCCESS,
    PASSWORD_VERIFICATION_FAILURE,
    PASSWORD_VERIFICATION_REQUEST,
    PASSWORD_VERIFICATION_SUCCESS
} from '../types';
import { 
  PRODUCTION_BACKEND_URL, 
  TESTING_BACKEND_URL 
} from '../urls';

export const updateUser = (payload, token) => async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
  
    try {
      const response = await axios.post(`${PRODUCTION_BACKEND_URL}/user/update`, payload, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
      dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
      toast.success("Profile Edited successfully.");
    } catch (error) {
      dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
      toast.error("Failed to edit profile.");
    }
};

export const deleteUser = (token, password) => async (dispatch) => {
    dispatch({ type: DELETE_USER_REQUEST });
  
    try {
      const response = await axios.delete(`${PRODUCTION_BACKEND_URL}/user/delete`, {'password': password},{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
      dispatch({ type: DELETE_USER_SUCCESS, payload: response.data });
      toast.success("Profile Deleted successfully");
    } catch (error) {
      dispatch({ type: DELETE_USER_FAILURE, payload: error.message });
      toast.error("Failed to delete profile");
    }
};

export const verifyPassword = (token) => async (dispatch) => {
    dispatch({ type: PASSWORD_VERIFICATION_REQUEST });
  
    try {
      const response = await axios.delete(`${PRODUCTION_BACKEND_URL}/verify_password`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
      dispatch({ type: PASSWORD_VERIFICATION_SUCCESS, payload: response.data });
      toast.success("Password Verified successfully");
    } catch (error) {
      dispatch({ type: PASSWORD_VERIFICATION_FAILURE, payload: error.message });
      toast.error("Failed to verify password");
    }
};