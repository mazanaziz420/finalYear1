// store/reducers/hiringStaffReducer.js
import {
    CUSTOMER_HIRE_STAFF_REQUEST, CUSTOMER_HIRE_STAFF_SUCCESS, CUSTOMER_HIRE_STAFF_FAILURE,
    VENUE_PROVIDER_HIRE_STAFF_REQUEST, VENUE_PROVIDER_HIRE_STAFF_SUCCESS, VENUE_PROVIDER_HIRE_STAFF_FAILURE,
    CHECK_STAFF_AVAILABILITY_REQUEST, CHECK_STAFF_AVAILABILITY_SUCCESS, CHECK_STAFF_AVAILABILITY_FAILURE,
    ACCEPT_HIRE_REQUEST_REQUEST, ACCEPT_HIRE_REQUEST_SUCCESS, ACCEPT_HIRE_REQUEST_FAILURE,
    REJECT_HIRE_REQUEST_REQUEST, REJECT_HIRE_REQUEST_SUCCESS, REJECT_HIRE_REQUEST_FAILURE,
    GET_HIRE_REQUESTS_BY_HIRER_ID_REQUEST, GET_HIRE_REQUESTS_BY_HIRER_ID_SUCCESS, GET_HIRE_REQUESTS_BY_HIRER_ID_FAILURE,
    GET_HIRE_REQUESTS_FOR_USER_REQUEST, GET_HIRE_REQUESTS_FOR_USER_SUCCESS, GET_HIRE_REQUESTS_FOR_USER_FAILURE
} from '../types';

const initialState = {
    loading: false,
    hireRequest: null,
    availability: [],
    message: '',
    error: null,
    hireRequestsByEventType: [],
    hireREquestsForUser: []
};

const hiringStaffReducer = (state = initialState, action) => {
    switch (action.type) {
        case CUSTOMER_HIRE_STAFF_REQUEST:
        case VENUE_PROVIDER_HIRE_STAFF_REQUEST:
        case CHECK_STAFF_AVAILABILITY_REQUEST:
        case ACCEPT_HIRE_REQUEST_REQUEST:
        case REJECT_HIRE_REQUEST_REQUEST:
        case GET_HIRE_REQUESTS_BY_HIRER_ID_REQUEST:  // Loading state for the new action
        case GET_HIRE_REQUESTS_FOR_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CUSTOMER_HIRE_STAFF_SUCCESS:
        case VENUE_PROVIDER_HIRE_STAFF_SUCCESS:
            return {
                ...state,
                loading: false,
                hireRequest: action.payload,
                message: action.payload.message,
            };
        case CHECK_STAFF_AVAILABILITY_SUCCESS:
            return {
                ...state,
                loading: false,
                availability: action.payload.booked_dates,
            };
        case ACCEPT_HIRE_REQUEST_SUCCESS:
        case REJECT_HIRE_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
            };
        case GET_HIRE_REQUESTS_BY_HIRER_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                hireRequestsByEventType: action.payload,
            };
        case GET_HIRE_REQUESTS_FOR_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                hireREquestsForUser: action.payload,
            }
        case CUSTOMER_HIRE_STAFF_FAILURE:
        case VENUE_PROVIDER_HIRE_STAFF_FAILURE:
        case CHECK_STAFF_AVAILABILITY_FAILURE:
        case ACCEPT_HIRE_REQUEST_FAILURE:
        case REJECT_HIRE_REQUEST_FAILURE:
        case GET_HIRE_REQUESTS_BY_HIRER_ID_FAILURE:
        case GET_HIRE_REQUESTS_FOR_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default hiringStaffReducer;