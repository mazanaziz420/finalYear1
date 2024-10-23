import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const StaffDescriptionsAndHiring = () => {
  const [formData, setFormData] = useState({
    message: 'I would like to inquire about hiring staff for my event. Please contact me at your earliest convenience.',
    date: '',
    time: '',
    wageOffered: '',
    city: '',
    venueLocation: '',
    eventType: '',
    numberOfGuests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="flex justify-between max-w-7xl mx-auto p-6 space-x-6">
      {/* Left side - Staff Information */}
      <div className="flex-1">
        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-4">
          <img src="image1.jpg" alt="Staff 1" className="w-full h-auto object-cover rounded-md" />
          <img src="image2.jpg" alt="Staff 2" className="w-full h-auto object-cover rounded-md" />
          <img src="image3.jpg" alt="Staff 3" className="w-full h-auto object-cover rounded-md" />
        </div>

        {/* Personal Information */}
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h2 className="text-xl font-bold">John Doe</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="font-semibold">Gender: <span className="font-normal">Male</span></div>
            <div className="font-semibold">Age: <span className="font-normal">29</span></div>
            <div className="font-semibold">City: <span className="font-normal">New York</span></div>
            <div className="font-semibold">State: <span className="font-normal">NY</span></div>
          </div>
        </div>

        {/* Availability */}
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-bold">Availability</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>Days: <span className="font-normal">Monday - Friday</span></div>
            <div>Work Time: <span className="font-normal">9:00 AM - 5:00 PM</span></div>
          </div>
        </div>

        {/* Experiences */}
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-bold">Experiences</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>Years of Experience: <span className="font-normal">5 Years</span></div>
            <div>Previous Employers: <span className="font-normal">ABC Events</span></div>
            <div>Relevant Skills: <span className="font-normal">Event Planning, Catering</span></div>
            <div>Types of Events: <span className="font-normal">Weddings, Corporate Events</span></div>
            <div>Roles Performed: <span className="font-normal">Manager, Coordinator</span></div>
          </div>
        </div>

        {/* Certificates and Trainings */}
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-bold">Certificates & Trainings</h3>
          <p className="mt-2">Certified Event Planner, Safety Training</p>
        </div>

        {/* Hourly Wage */}
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-bold">Hourly Wage</h3>
          <p className="mt-2">$25/hour</p>
        </div>

        {/* Additional Notes */}
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-bold">Additional Notes</h3>
          <p className="mt-2">Available for weekend shifts as well.</p>
        </div>
      </div>

      {/* Right side - Inquiry Form */}
      <div className="w-1/3 p-6 bg-white rounded-lg shadow-md">
   

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        

          
          

          {/* New Hiring Details Section */}
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Hiring Details</h3>
            
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Event Date*</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">Event Time*</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="wageOffered" className="block text-sm font-medium text-gray-700">Wage Offered (PKR/hour)*</label>
              <input
                type="number"
                id="wageOffered"
                name="wageOffered"
                value={formData.wageOffered}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City*</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="venueLocation" className="block text-sm font-medium text-gray-700">Venue Location*</label>
              <input
                type="text"
                id="venueLocation"
                name="venueLocation"
                value={formData.venueLocation}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">Event Type</label>
              <input
                type="text"
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm"
                placeholder="e.g., Wedding, Corporate Event, Birthday Party"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
              <input
                type="number"
                id="numberOfGuests"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm"
            ></textarea>
          </div>

          <Link to="/BookingConfirmation">
            <button
              type="submit"
              className="w-full mt-6 bg-green-500 text-white py-2 rounded-md flex items-center justify-center hover:bg-green-600 transition duration-300"
            >
              Submit Hiring Request
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default StaffDescriptionsAndHiring;