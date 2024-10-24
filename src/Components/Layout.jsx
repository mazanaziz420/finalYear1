import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children, role }) => {
  return (
    <div className="flex flex-1">
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-10">
          <h2 className="text-2xl font-serif font-bold">Dashboard</h2>
          <nav className="mt-4">
            <ul>
              

              {/* Customer-specific links */}
              {role === 'customer' && (
                <>
                  <li><Link to="/profile" className="block py-2">Profile</Link></li>
                  <li><Link to="/Mybookings" className="block py-2">My Bookings</Link></li>
                  <li><Link to="/MyStaff" className="block py-2">Hiring Staff</Link></li>
                  <li><Link to="/FavouritesPage" className="block py-2">Favourites</Link></li>
                  <li><Link to="/PaymentAndBilling" className="block py-2">Payments and Billing</Link></li>
                  <li><Link to="/MyEvents" className="block py-2">Recent Events</Link></li>
                </>
              )}

              {/* Staff-specific links */}
              {role === 'staff' && (
                <>
                  <li><Link to="/StaffForm" className="block py-2">Profile</Link></li>
                  <li><Link to="/Invitation" className="block py-2">Invitations</Link></li>
                  <li><Link to="/Jobhistory" className="block py-2">Job History</Link></li>
                  <li><Link to="/PaymentsAndEarnings" className="block py-2">Payments And Earnings</Link></li>
                  
                </>
              )}
              
              {/* Shared links */}
              
              <li><Link to="/Login" className="block py-2 text-red-500 font-bold">Logout</Link></li>
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
