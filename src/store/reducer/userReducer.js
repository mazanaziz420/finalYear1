// reducers/userReducer.js
import {
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    DELETE_USER_REQUEST, 
    DELETE_USER_FAILURE, 
    DELETE_USER_SUCCESS,
    PASSWORD_VERIFICATION_FAILURE,
    PASSWORD_VERIFICATION_REQUEST,
    PASSWORD_VERIFICATION_SUCCESS
} from '../types';

const initialState = {
    loading: false,
    verify_pass_loading: false,
    message: '',
    verify_pass_message: '',
    error: null,
    verify_pass_error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case PASSWORD_VERIFICATION_REQUEST:
            return {
                ...state,
                verify_pass_loading: true,
                verify_pass_error: null,
            }
        case UPDATE_USER_SUCCESS:
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message, // Update this according to your payload structure
            };
            
        case PASSWORD_VERIFICATION_SUCCESS:
            return {
                ...state,
                verify_pass_loading: false,
                verify_pass_message: action.payload.message, // Update this according to your payload structure
            };

        case UPDATE_USER_FAILURE:
        case DELETE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
            
        case PASSWORD_VERIFICATION_FAILURE:
            return {
                ...state,
                lverify_pass_loading: false,
                verify_pass_error: action.payload,
            };

        default:
            return state;
    }
};

export default userReducer;
