import axios from 'axios';
import { toast } from 'react-toastify';
import { PAYMENT_INTENT_SUCCESS, PAYMENT_INTENT_FAILURE, PAYMENT_INTENT_REQUEST } from '../types';
import { PRODUCTION_BACKEND_URL } from '../urls'; // Your backend URL

export const createPaymentIntent = (paymentData) => async (dispatch) => {
    dispatch({ type: PAYMEN, payload: true });
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${PRODUCTION_BACKEND_URL}/payment/create-payment-intent`, paymentData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });

        const { client_secret } = response.data;

        dispatch({ type: PAYMENT_INTENT_SUCCESS, payload: client_secret });
        toast.success('Payment intent created!');

        // Proceed with client secret on the frontend to confirm payment

    } catch (error) {
        dispatch({ type: PAYMENT_INTENT_FAILURE, payload: error.response.data.message });
        toast.error('Failed to create payment intent.');
    }
};
