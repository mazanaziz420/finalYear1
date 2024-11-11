// store/reducers/staffReducer.js
import {
    ADD_STAFF_REQUEST, ADD_STAFF_SUCCESS, ADD_STAFF_FAILURE,
    GET_STAFF_REQUEST, GET_STAFF_SUCCESS, GET_STAFF_FAILURE,
    GET_ALL_STAFF_REQUEST, GET_ALL_STAFF_SUCCESS, GET_ALL_STAFF_FAILURE,
    EDIT_STAFF_REQUEST, EDIT_STAFF_SUCCESS, EDIT_STAFF_FAILURE,
    DELETE_STAFF_REQUEST, DELETE_STAFF_SUCCESS, DELETE_STAFF_FAILURE,
} from '../types';

const initialState = {
    loading: false,
    staffData: null,
    allStaffData: [],
    message: '',
    error: null,
};

const staffReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STAFF_REQUEST:
        case GET_STAFF_REQUEST:
        case GET_ALL_STAFF_REQUEST:
        case EDIT_STAFF_REQUEST:
        case DELETE_STAFF_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ADD_STAFF_SUCCESS:
        case EDIT_STAFF_SUCCESS:
        case DELETE_STAFF_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
            };
        case GET_STAFF_SUCCESS:
            return {
                ...state,
                loading: false,
                staffData: action.payload.staff_details,
            };
        case GET_ALL_STAFF_SUCCESS:
            return {
                ...state,
                loading: false,
                allStaffData: action.payload,
            };
        case ADD_STAFF_FAILURE:
        case GET_STAFF_FAILURE:
        case GET_ALL_STAFF_FAILURE:
        case EDIT_STAFF_FAILURE:
        case DELETE_STAFF_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default staffReducer;
