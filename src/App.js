import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initiateSocketConnection, subscribeToNotifications, disconnectSocket } from './services/socketService';
import { receiveNotification } from './store/action/notificationAction';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import HireStaff from './Components/HireStaff';
import Navbar from './Components/Navbar';
import Career from './Components/Career';
import DescriptionPage from './Components/Description';
import Auth from './Components/SigninSignup';
import MainApp from './Pages/Addlistings';
import PaymentMethod from './Components/PaymentMethod';
import AddPayment from './Pages/AddPayment';
import DeleteAccount from './Pages/DeleteAccount';


import FavoritesPage from './Components/Favourites';
import Jobhistory from './Components/Jobhistory';
import PaymentsAndEarnings from './Components/PaymentsAndEarnings';
import FoodServices from './Components/FoodServices'; // New FoodServices import
import EntertainmentServices from './Components/EntertainmentServices';
import BookingConfirmation from './Components/BookingConfirmation';
import Planningdesc from './Components/planningdesc';
import Fooddesc from './Components/Fooddesc';
import Invitation from './Components/Invitation';
import Entertaindesc from './Components/Entertaindesc';
import MyStaff from './Pages/MyStaff';


// Pages Import
import VendorForm from './Pages/VendorListing';
import CustomerDashboard from './Pages/CustomerDash';
import EventOrganizerDashboard from './Pages/Eventorgdash';

import StaffDashboard from './Pages/Staffdash';
import EditProfile from './Pages/Editprofile';

import MakeupVendorForm from './Pages/MakeupVendorForm';
import './index.css';
// import './button.js';

// Dashboard Folder
import Dashboard from './Dashboards/dashboard1';
import Login from './Components/SigninSignup';
import Orderpage from './Dashboards/Orderpage';
import RecOrders from './Dashboards/RecOrders';
import MyListing from './Dashboards/MyListing';

import './index.css';
import SecurityPage from './Pages/Securitypage';
import Setting from './Pages/Settings';


import CustomersPage from './Dashboards/Customerpg';
import MakeupService from './Pages/MakeupService';
import OrganizerPage from './Pages/OrganizerPage';
import PlanningAndDecor from './Components/Planning & decor'; // Import the updated component


import Discriptions from './Pages/StaffDesc';
import OrganizerVendorForm from './Pages/OrganizerVendorForm';
import FoodVendorForm from './Pages/FoodVendorForm';


import EntertainmentVendorForm from './Pages/EntertainmentVendorForm';

import MyEvents from './Pages/MyEvents';
import Mybookings from './Pages/Mybookings';
import PaymentAndBilling from './Pages/PaymentAndBilling';
import StaffForm from './Pages/StaffForm';
import ReportsPage from './Dashboards/Reportpg';
import IntegrationsPage from './Dashboards/Integratepg';
import Recents from './Dashboards/Recents';
import ModifyBooking from './Components/ModifyBooking';
import MakeupArtistDetail from './Pages/MakeupArtistDetail';
// import StaffDashboard from './Pages/Staffdash';

import { ToastContainer } from 'react-toastify';

// Import Stripe Elements
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51PzidUP7IPyRWGaHC4j7c4qNgdmBUcOw2hSVMMhTlLomE08j098oQRKw1Urdhp3EWIBHh8Pphj4UHqYqE7I2WllE00s1acrvWL"); // Ensure this environment variable is set

function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    initiateSocketConnection();

    // Listen for notifications
    subscribeToNotifications((notification) => {
      dispatch(receiveNotification(notification));
    });

    // Cleanup on unmount
    return () => disconnectSocket();
  }, [dispatch]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log('is login? ', isLoggedIn);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/HireStaff" element={<HireStaff />} />
          <Route path="/career" element={<Career />} />
          <Route path="/MakeupService" element={<MakeupService />} />
          <Route path="/OrganizerPage" element={<OrganizerPage />} />
          <Route path="/description/:category/:id" element={<DescriptionPage />} />
          <Route path="/signinsignup" element={<Auth />} />
          <Route path="/CustomerDashboard" element={<CustomerDashboard />} />
          <Route path="/MyEvents" element={<MyEvents />} />
          <Route path="/event-organizer" element={<EventOrganizerDashboard />} />
          
          <Route path="/staff" element={<StaffDashboard />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/MainApp" element={<MainApp />} />
          <Route path="/PaymentMethod" element={<PaymentMethod />} />
          <Route path="/setting" element={<Setting/>} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<CustomersPage />} />
          
          <Route path="/Recents" element={<Recents  />} />
          <Route path="/SecurityPage" element={<SecurityPage />} />
          <Route path="/AddPayment" element={<AddPayment />} />
          <Route path="/DeleteAccount" element={<DeleteAccount />} />
          <Route path="/MyStaff" element={<MyStaff />} />
          <Route path="/Orderpage" element={<Orderpage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          
          {/* Wrap PaymentMethod component in Stripe Elements */}
          <Route 
            path="/payment-method" 
            element={
              <Elements stripe={stripePromise}>
                <PaymentMethod />
              </Elements>
            }
          />
          <Route path="/MyListing" element={<MyListing />} />
          <Route path="/planning-decor/:category" element={<PlanningAndDecor />} /> {/* General page for Planning & Decor */}
          <Route path="/BookingConfirmation" element={<BookingConfirmation />} />
          <Route path="/OrganizerVendorForm" element={<OrganizerVendorForm />} />
          <Route path="/FoodVendorForm" element={<FoodVendorForm />} />
          <Route path="/EntertainmentVendorForm" element={<EntertainmentVendorForm />} />
          <Route path="/MakeupVendorForm" element={<MakeupVendorForm />} />
          <Route path="/VendorForm" element={<VendorForm />} />
          <Route path="/FavouritesPage" element={<FavoritesPage />} />
          <Route path="/Mybookings" element={<Mybookings />} />
          <Route path="/PaymentAndBilling" element={<PaymentAndBilling />} />
          <Route path="/StaffForm" element={<StaffForm />} /> 
          <Route path="/Invitation" element={<Invitation />} />
          <Route path="/Jobhistory" element={<Jobhistory />} />
          <Route path="/PaymentsAndEarnings" element={<PaymentsAndEarnings />} />
          <Route path="/RecOrders " element={<RecOrders  />} />
          <Route path="/ModifyBooking" element={<ModifyBooking  />} />
          <Route path="/artist/:id" element={<MakeupArtistDetail />} />


          {/* Updated routes for Planning & Decor categories */}
          <Route path="/planning-decor/wedding-planners" element={<PlanningAndDecor category="Wedding Planners" />} />
          <Route path="/planning-decor/decorators" element={<PlanningAndDecor category="Decorators" />} />
          <Route path="/planning-decor/event-resources" element={<PlanningAndDecor category="Event Resources" />} />
          <Route path="/FoodServices" element={<FoodServices />} /> {/* New FoodServices route */}
          <Route path="/EntertainmentServices" element={<EntertainmentServices />} />
          <Route path="/Descriptions/:selectedCategory/:id" element={<Discriptions/>} />
          <Route path="/Planningdesc/:selectedCategory/:id" element={< Planningdesc />} />
          <Route path="/Fooddesc/:selectedCategory/:id" element={< Fooddesc/>} />
          <Route path="/Entertaindesc/:selectedCategory/:id" element={<Entertaindesc />} />
        </Routes>

        <ToastContainer
          position="top-center" 
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  );
}

export default AppRoutes;
