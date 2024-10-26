import React from 'react';
import Layout from '../Components/Layout';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Layout role="customer">
      <h1 className="text-2xl font-bold font-serif mb-6">Welcome!</h1>

      {/* Upcoming Events Section */}
      <section className="mb-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-2">Your Event</h3>
            <p className="text-black">Date: June 15, 2024</p>
            <p className="text-black">Location: City Hall</p>
            <Link to="/Mybookings"><button className="mt-3 bg-blue-500 text-white px-3 py-2 rounded hover:bg-cyan-700">View Details</button></Link>
          </div>
        </div>
      </section>

      {/* Booking History Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Recent Bookings</h2>
        <table className="w-full bg-gray-100 rounded shadow">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-3 text-left">Event</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left"></th>  
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3">Title</td>
              <td className="p-3">June 10, 2024</td>
              <td className="p-3">City Hall</td>
              <td className="p-3 text-green-500 font-semibold">Confirmed</td>
              <Link to="/MyEvents"><button className="mt-3 mb-1  text-black px-6 py-2 rounded hover:underline hover:blue-400  ">View Details</button></Link>
            </tr>
           
          </tbody>
        </table>
      </section>

      {/* Profile Management Section */}
      <section className="mb-6">
        <h2 className="text-xl text-gray-800 font-semibold mb-3">Profile Management</h2>
        <div className="bg-gray-300 p-4 rounded shadow">
          <p className="text-black font-semiboldS">Name: {user.full_name}</p>
          <p className="text-black">Email: {user.email}</p>
          <Link to="/profile">
            <button className="mt-3 bg-blue-500 text-white px-3 py-2 rounded hover:bg-cyan-700">Edit Profile</button>
          </Link>
          
        </div>
      </section>

      
    </Layout>
  );
};

export default CustomerDashboard;
