import { CalendarCheck, Ticket } from 'lucide-react';
import React from 'react';



export default function BookingConfirmation() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-red-100 p-3 rounded-full mb-4">
          <CalendarCheck className="w-12 h-12 text-blue-500" />
        </div>
        <h1 className="text-2xl font-bold text-center">Booking Request Sent</h1>
        <p className="text-gray-600 text-center mt-2">
          We are pleased to inform you that your reservation request has been received.
        </p>
      </div>

      

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="flex items-center mb-4">
         
          {/* Profile Picture of Venue */}
          <img src="/placeholder.svg?height=100&width=100" alt="Event" className="w-20 h-20 rounded-lg mr-4" />
          <div>
            <h2 className="text-lg font-semibold">Venue Name </h2>
            <p className="text-gray-600">Date and Time</p>
            <p className="font-medium">Venue Provider Name</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          
          <span> Package Selected: Silver</span>
        </div>
      </div>

      <button className="w-full bg-blue-500 text-white p-2 rounded-lg">
        <Ticket className="w-4 h-4 mr-2" />
        View Ticket
      </button>
    </div>
  );
}
