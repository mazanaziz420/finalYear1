import React, { useEffect } from 'react';
import Layout from '../Components/Layout';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingsForCustomer } from '../store/action/bookingAction';

const CustomerDashboard = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  // Accessing the bookings from the Redux state
  const { bookingsForCustomer, loading, error } = useSelector((state) => state.booking);

  useEffect(() => {
    // Dispatch the action to fetch bookings for the customer
    dispatch(getBookingsForCustomer(token));
  }, [dispatch, token]);

  // Filter the bookings to show only booked and paid events
  const recentBookings = bookingsForCustomer?.filter(
    booking => booking.status === 'booked' && booking.paymentStatus === 'Paid'
  );

  const bookings = bookingsForCustomer?.filter(
    booking => booking.status === 'booked'
  )

  return (
    <Layout role="customer">
      <h1 className="text-2xl font-bold font-serif mb-6">Welcome!</h1>

      {/* Upcoming Events Section */}
      <section className="mb-6">
        <h1 className=' font-bold text-lg'>Events To be Paid</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
              <div className="p-4 text-center text-gray-500">Loading...</div>
            ) : bookings && bookings.length > 0 ? (
            bookings.map(booking => {
              const details = booking.vendor_details || booking.venue_details; // Use either vendor_details or venue_details
              return (
                <div key={booking._id} className="bg-gray-200 p-4 rounded shadow">
                  <h3 className="text-lg font-bold mb-2">{details.name}</h3>
                  <p className="text-black">Date: {booking.booking_date_range.join(' to ')}</p>
                  <p className="text-black">Location: {details.city}</p>
                  <Link to="/Mybookings">
                    <button className="mt-3 bg-blue-500 text-white px-3 py-2 rounded hover:bg-cyan-700">View Details</button>
                  </Link>
                </div>
              );
            })
            ) : (
              <div className="p-4 text-center text-gray-500">No upcoming bookings</div>
          )}
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
            {loading ? (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-500">Loading...</td>
              </tr>
            ) : recentBookings && recentBookings.length > 0 ? (
              recentBookings.map(booking => {
                const details = booking.vendor_details || booking.venue_details; // Use either vendor_details or venue_details
                return (
                  <tr key={booking._id}>
                    <td className="p-3">{details.name}</td>
                    <td className="p-3">{booking.booking_date_range.join(' to ')}</td>
                    <td className="p-3">{details.city}</td>
                    <td className="p-3 text-green-500 font-semibold">Confirmed</td>
                    <Link to={`/MyEvents/${booking._id}`}>
                      <button className="mt-3 mb-1 text-black px-6 py-2 rounded hover:underline hover:blue-400">
                        View Details
                      </button>
                    </Link>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-500">No confirmed bookings</td>
              </tr>
            )}
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
