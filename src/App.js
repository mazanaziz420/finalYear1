import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Career from './Components/Career';
import DescriptionPage from './Components/Description';
import Auth from './Components/SigninSignup';
import MainApp from './Pages/Addlistings';
import CustomerDashboard from './Pages/CustomerDash';
import EventOrganizerDashboard from './Pages/Eventorgdash';
import VenueProviderDashboard from './Pages/Venueprodash';
import StaffDashboard from './Pages/Staffdash';
import EditProfile from './Pages/Editprofile';
import PaymentMethod from './Components/PaymentMethod';
import Dashboard from './Dashboards/dashboard1';
import Login from './Components/SigninSignup';
import './index.css';
import Setting from './Pages/Settings';

import OrdersPage from './Dashboards/Orderpag';
import CustomersPage from './Dashboards/Customerpg';
import ReportsPage from './Dashboards/Reportpg';
import IntegrationsPage from './Dashboards/Integratepg';



function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/description/:category/:id" element={<DescriptionPage />} />
          <Route path="/signinsignup" element={<Auth />} />
          <Route path="/CustomerDashboard" element={<CustomerDashboard />} />
          <Route path="/event-organizer" element={<EventOrganizerDashboard />} />
          <Route path="/venue-provider" element={<VenueProviderDashboard />} />
          <Route path="/staff" element={<StaffDashboard />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/MainApp" element={<MainApp />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/setting" element={<Setting/>} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        
        
        
        
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/" element={<Dashboard />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
