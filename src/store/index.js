import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './reducer/authReducer';
import venueProviderReducer from './reducer/venueProviderReducer';
import VendorProviderReducer from './reducer/vendorReducer';
import paymentReducer from './reducer/paymentReducer';
import bookingReducer from './reducer/bookingReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  payment: paymentReducer,
  venueProvider: venueProviderReducer,
  vendor: VendorProviderReducer,
  booking: bookingReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
