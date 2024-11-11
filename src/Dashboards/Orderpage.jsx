import React, { useState, useEffect } from 'react';
import { Calendar, Clock, DollarSign, Users } from 'lucide-react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingsForProvider, acceptBooking, rejectBooking } from '../store/action/bookingAction'; // Import actions

export default function Orderpage() {
  const [filter, setFilter] = useState('all');
  const dispatch = useDispatch();
  const [entityType, setEntityType] = useState();
  const bookings = useSelector((state) => state.booking.bookings);
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const user_type = user?.user_type; 
  useEffect(() => {
    if (user_type === 'VENUE_PROVIDER') {
      setEntityType('venue');
    } else if (user_type === 'VENDOR') {
      setEntityType('vendor');
    }
  }, [user_type]); // Only run this when user_type changes

  useEffect(() => {
    if (user && entityType) {
      dispatch(getBookingsForProvider(entityType, token));
    }
  }, [dispatch, user, entityType, token]);

  // Transform API response to match UI structure
  const bookingRequests = bookings.map((booking) => ({
    id: booking._id,
    customerName: booking.customer_details?.full_name || 'Unknown Customer',
    customerAvatar: '/placeholder.svg?height=40&width=40',
    venueName: booking.venue_details?.name || 'Unknown Venue',
    date: booking.booking_date_range[0], // First date in the range
    time: 'TBD',
    guests: booking.numberOfPeople || 'TBD',
    price: booking.totalCost || 0, // Add totalCost if available
    status: booking.status,
  }));

  // Filter booking requests based on status
  const filteredRequests =
    filter === 'all'
      ? bookingRequests
      : bookingRequests.filter((request) => request.status === filter);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    booked: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  };

  const handleAccept = (bookingId) => {
    dispatch(acceptBooking(bookingId, token))
      .then(() => dispatch(getBookingsForProvider(entityType, token)));
  };

  const handleReject = (bookingId) => {
    dispatch(rejectBooking(bookingId, token))
      .then(() => dispatch(getBookingsForProvider(entityType, token)));
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
