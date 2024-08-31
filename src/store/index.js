import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './reducer/authReducer';
import venueProviderReducer from './reducer/venueProviderReducer';
import VendorProviderReducer from './reducer/vendorReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  venueProvider: venueProviderReducer,
  vendor: VendorProviderReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
