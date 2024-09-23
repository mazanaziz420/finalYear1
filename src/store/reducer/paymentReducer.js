// store/reducer/paymentReducer.js
import { PAYMENT_INTENT_SUCCESS, PAYMENT_INTENT_FAILURE, PAYMENT_INTENT_REQUEST } from '../types';

const initialState = {
  clientSecret: null,
  loading: false,
  error: null,
};

export default function paymentReducer(state = initialState, action) {
  switch (action.type) {
    case PAYMENT_INTENT_REQUEST:
        return { ...state, loading:true}
    case PAYMENT_INTENT_SUCCESS:
      return { ...state, clientSecret: action.payload, error: null, loading: false };
    case PAYMENT_INTENT_FAILURE:
      return { ...state, clientSecret: null, error: action.payload, loading: false };
    default:
      return state;
  }
}
