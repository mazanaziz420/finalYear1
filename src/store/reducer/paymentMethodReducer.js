// reducers/paymentMethodReducer.js
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
} from '../types'; // Adjust the import path as needed

const initialState = {
    paymentMethods: [],
    loading: false,
    error: null,
};

const paymentMethodReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PAYMENT_METHOD_REQUEST:
            return { ...state, loading: true, error: null };
        case ADD_PAYMENT_METHOD_SUCCESS:
            return { ...state, loading: false, paymentMethods: [...state.paymentMethods, action.payload] };
        case ADD_PAYMENT_METHOD_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case GET_PAYMENT_METHOD_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_PAYMENT_METHOD_SUCCESS:
            return { ...state, loading: false, paymentMethods: action.payload };
        case GET_PAYMENT_METHOD_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case UPDATE_PAYMENT_METHOD_REQUEST:
            return { ...state, loading: true, error: null };
        case UPDATE_PAYMENT_METHOD_SUCCESS:
            return {
                ...state,
                loading: false,
                paymentMethods: state.paymentMethods.map(method =>
                    method._id === action.payload._id ? action.payload : method
                ),
            };
        case UPDATE_PAYMENT_METHOD_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case DELETE_PAYMENT_METHOD_REQUEST:
            return { ...state, loading: true, error: null };
        case DELETE_PAYMENT_METHOD_SUCCESS:
            return {
                ...state,
                loading: false,
                paymentMethods: state.paymentMethods.filter(method => method._id !== action.payload._id),
            };
        case DELETE_PAYMENT_METHOD_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default paymentMethodReducer;
