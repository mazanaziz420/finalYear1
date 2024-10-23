import React, { useState } from 'react';
import { Calendar, Clock, DollarSign, Users } from 'lucide-react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

export default function Orderpage() {
  const [filter, setFilter] = useState('all');

  const bookingRequests = [
    {
      id: 1,
      customerName: 'Alice Johnson',
      customerAvatar: '/placeholder.svg?height=40&width=40',
      venueName: 'Grand Ballroom',
      date: '2023-08-15',
      time: '18:00 - 22:00',
      guests: 150,
      price: 5000,
      status: 'pending',
    },
    {
      id: 2,
      customerName: 'Bob Smith',
      customerAvatar: '/placeholder.svg?height=40&width=40',
      venueName: 'Rooftop Terrace',
      date: '2023-09-01',
      time: '12:00 - 16:00',
      guests: 80,
      price: 3000,
      status: 'confirmed',
    },
    {
      id: 3,
      customerName: 'Carol Davis',
      customerAvatar: '/placeholder.svg?height=40&width=40',
      venueName: 'Garden Pavilion',
      date: '2023-08-20',
      time: '10:00 - 14:00',
      guests: 100,
      price: 3500,
      status: 'pending',
    },
  ];

  const filteredRequests = filter === 'all' 
    ? bookingRequests 
    : bookingRequests.filter((request) => request.status === filter);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
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
          <option value="confirmed">Confirmed</option>
          <option value="cancelled">Cancelled</option>
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
            
            <Link to="/">
              <button className={`px-4 py-2 rounded-md ${request.status === 'pending' ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white'}`}>
                {request.status === 'pending' ? 'Confirm' : 'View Details'}
              </button>
              {request.status === 'pending' && (
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-800">
                  Decline
                </button>
              )}
               </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
