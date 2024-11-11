import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './reducer/authReducer';
import venueProviderReducer from './reducer/venueProviderReducer';
import VendorProviderReducer from './reducer/vendorReducer';
import paymentReducer from './reducer/paymentReducer';
import bookingReducer from './reducer/bookingReducer';
import userReducer from './reducer/userReducer';
import paymentMethodReducer from './reducer/paymentMethodReducer';
import notificationReducer from './reducer/notificationReducer';
import staffReducer from './reducer/staffReducer';
import hiringStaffReducer from './reducer/hiringStaffReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  payment: paymentReducer,
  venueProvider: venueProviderReducer,
  vendor: VendorProviderReducer,
  booking: bookingReducer,
  user: userReducer,
  paymentMethod: paymentMethodReducer,
  notifications: notificationReducer,
  staff: staffReducer,
  hiring: hiringStaffReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
