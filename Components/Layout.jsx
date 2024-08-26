import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children, role }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  //const [profilePicture, setProfilePicture] = useState('');

 
//  const toggleDropdown = () => {
//    setDropdownVisible(!dropdownVisible);
//  };

//     {*LogoutPartfor dropdown Porfile*}
//    const handleLogout = () => {
//  localStorage.removeItem('token');
//  window.location.href = '/login'; // Redirect to login page
//};

  return (
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-800 text-white">
          <div className="p-10">
            <h2 className="text-2xl font-serif font-bold">Dashboard</h2>
            <nav className="mt-4">
              <ul>
                <li><Link to="/profile" className="block py-2">Profile</Link></li>
                <li><Link to="/my-listing" className="block py-2">My Listing</Link></li>
                {role === 'customer' && <li><Link to="/my-events" className="block py-2">My Events</Link></li>}
                <li><Link to="/booking-history" className="block py-2">Recent Events</Link></li>
          
                <li><Link to="/payment-method" className="block py-2">Payment Method</Link></li>
                
                
               
                <li><Link to="/Login" className="block py-2 text-red-500 font-bold">Logout</Link></li>
                {role === 'event-organizer' && <li><Link to="/organize-event" className="block py-2">Organize Event</Link></li>}
                {role === 'venue-provider' && <li><Link to="/my-venues" className="block py-2">My Venues</Link></li>}
                {role === 'venue-provider' && <li><Link to="/booking-requests" className="block py-2">Booking Requests</Link></li>}
                {role === 'staff' && <li><Link to="/staff-tasks" className="block py-2">Staff Tasks</Link></li>}
                {role === 'staff' && <li><Link to="/event-support" className="block py-2">Event Support</Link></li>}
                {role === 'staff' && <li><Link to="/schedule" className="block py-2">Your Schedule</Link></li>}
              </ul>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </div>
   
  );
};

export default Layout;
