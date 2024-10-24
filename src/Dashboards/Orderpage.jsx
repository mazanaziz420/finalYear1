import React, { useState, useEffect } from 'react';
import { Calendar, Clock, DollarSign, Users } from 'lucide-react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingsForProvider, acceptBooking, rejectBooking } from '../store/action/bookingAction'; // Import your action

export default function Orderpage() {
  const [filter, setFilter] = useState('all');
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.booking.bookings); // Assuming you have a booking slice in your Redux store

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('user: ', user);
    dispatch(getBookingsForProvider('66cd7dcad9e6dbcbebbffa63'));
  }, [dispatch]);


  // Transform API response to match your UI structure
  const bookingRequests = bookings.map(booking => ({
    id: booking._id,
    customerName: booking.customer_id, // You may need to fetch customer details separately
    customerAvatar: '/placeholder.svg?height=40&width=40', // Placeholder for avatar
    venueName: booking.venue_id, // You may need to fetch venue details separately
    date: booking.booking_date_range[0], // Assuming the first date is the relevant one
    time: 'TBD', // You might need to handle time based on your booking details
    guests: 'TBD', // You might need to set guests based on your booking details
    price: 'TBD', // You might need to set price based on your booking details
    status: booking.status,
  }));

  const filteredRequests = filter === 'all' 
    ? bookingRequests 
    : bookingRequests.filter((request) => request.status === filter);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  const handleAccept = (bookingId) => {
    dispatch(acceptBooking(bookingId));
    dispatch(getBookingsForProvider('66cd7dcad9e6dbcbebbffa63'));
  };

  const handleReject = (bookingId) => {
    dispatch(rejectBooking(bookingId));
    dispatch(getBookingsForProvider('66cd7dcad9e6dbcbebbffa63'));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Venue Booking Requests</h1>

        <div className="mb-6 flex justify-between items-center">
          <select
            className="w-[180px] border border-gray-300 rounded-md p-2"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Requests</option>
            <option value="pending">Pending</option>
            <option value="booked">Booked</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredRequests.map((request) => (
            <div key={request.id} className="border rounded-lg p-4 shadow-md">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h2 className="text-sm font-medium">Booking #{request.id}</h2>
                <span className={`inline-flex items-center px-2 py-1 text-xs font-bold rounded-full ${statusColors[request.status]}`}>
                  {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                </span>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <img src={request.customerAvatar} alt={request.customerName} className="h-10 w-10 rounded-full" />
                <div>
                  <p className="text-sm font-medium">{request.customerName}</p>
                  <p className="text-sm text-gray-500">{request.venueName}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  {request.date}
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4" />
                  {request.time}
                </div>
                <div className="flex items-center text-sm">
                  <Users className="mr-2 h-4 w-4" />
                  {request.guests} guests
                </div>
                <div className="flex items-center text-sm">
                  <DollarSign className="mr-2 h-4 w-4" />
                  ${request.price.toLocaleString()}
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
              {request.status === 'pending' ? (
                  <>
                    <button 
                      onClick={() => handleAccept(request.id)} 
                      className="px-4 py-2 rounded-md bg-blue-500 text-white"
                    >
                      Confirm
                    </button>
                    <button 
                      onClick={() => handleReject(request.id)} 
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-800"
                    >
                      Decline
                    </button>
                  </>
                ) : (
                  <Link to="/">
                    <button className="px-4 py-2 rounded-md bg-blue-500 text-white">
                      View Details
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
