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
  } from "../types";
  
  const initialState = {
    loading: false,
    data: null,
    error: null,
    vendors: [],
  };
  
  const VendorProviderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_VENDOR_FORM_REQUEST:
        case GET_VENDORS_REQUEST:
        case DELETE_VENDOR_REQUEST:
            return { ...state, loading: true, error: null };
        case SUBMIT_VENDOR_FORM_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case GET_VENDORS_SUCCESS:
            return { ...state, loading: false, vendors: action.payload };
        case DELETE_VENDOR_SUCCESS:
            return {
                ...state,
                loading: false,
                vendors: state.vendors.filter(vendor=> vendor._id !== action.payload),
            };
        case SUBMIT_VENDOR_FORM_FAILURE:
        case GET_VENDORS_FAILURE:
        case DELETE_VENDOR_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
  };
  
  export default VendorProviderReducer;
  