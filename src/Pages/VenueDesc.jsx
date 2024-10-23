import React from 'react';

const BookingVenue = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8">
      {/* Left Section - Venue Details */}
      <div className="flex-1">
        {/* Venue Images */}
        <div className="border rounded-lg p-4 mb-8 shadow-md">
          <h2 className="text-xl font-bold mb-4">Venue Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/path/to/image1.jpg" alt="Venue 1" className="w-full h-48 object-cover rounded-lg" />
            <img src="/path/to/image2.jpg" alt="Venue 2" className="w-full h-48 object-cover rounded-lg" />
            <img src="/path/to/image3.jpg" alt="Venue 3" className="w-full h-48 object-cover rounded-lg" />
          </div>
        </div>

        {/* Personal Information of Venue */}
        <div className="border rounded-lg p-4 mb-8 shadow-md">
          <h2 className="text-xl font-bold mb-4">Personal Information</h2>
          <p><strong>Type of Property:</strong> Banquet Hall</p>
          <p><strong>Name of Venue:</strong> Grand Palace</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <p><strong>Address:</strong> 123 Main St</p>
            <p><strong>City:</strong> New York</p>
            <p><strong>State:</strong> NY</p>
            <p><strong>Website URL:</strong> <a href="#" className="text-blue-500">www.grandpalace.com</a></p>
          </div>
        </div>

        {/* Venue Details (Capacity, Size, Availability, Description) */}
        <div className="border rounded-lg p-4 mb-8 shadow-md">
          <h2 className="text-xl font-bold mb-4">Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <p><strong>Capacity:</strong> 500</p>
            <p><strong>Size:</strong> 2000 sq ft</p>
            <p><strong>Availability:</strong> Available</p>
            <p><strong>Place Description:</strong> Elegant venue perfect for weddings and corporate events.</p>
          </div>
        </div>

        {/* Facilities (Services & Amenities) */}
        <div className="border rounded-lg p-4 mb-8 shadow-md">
          <h2 className="text-xl font-bold mb-4">Facilities</h2>
          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <div className="grid grid-cols-2 gap-4">
              <p>Decoration</p>
              <p>Catering</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Amenities</h3>
            <div className="grid grid-cols-2 gap-4">
              <p>WiFi</p>
              <p>AC</p>
              <p>Heater</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="border rounded-lg p-4 mb-8 shadow-md">
          <h2 className="text-xl font-bold mb-4">Pricing</h2>
          <div className="grid grid-cols-2 gap-4">
            <p><strong>Per/hour:</strong> $100</p>
            <p><strong>Per/day:</strong> $800</p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="border rounded-lg p-4 mb-8 shadow-md">
          <h2 className="text-xl font-bold mb-4">Additional Information</h2>
          <p><strong>Special Features:</strong> Rooftop garden, panoramic city views</p>
          <p><strong>Rules and Regulations:</strong> No loud music after 10 PM</p>
        </div>
      </div>

      {/* Right Section - Venue Owner Info */}
      <div className="w-full lg:w-1/3">
        <div className="border rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-bold mb-4">Venue Owner</h2>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Profile Picture</label>
            <div className="border-2 border-gray-300 p-2 w-32 h-32">
              <img src="/path/to/owner.jpg" alt="Owner" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Name</label>
            <input type="text" className="border rounded-md w-full p-2" placeholder="John Doe" />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Contact Information</label>
            <input type="text" className="border rounded-md w-full p-2" placeholder="(123) 456-7890" />
            <input type="email" className="border rounded-md w-full p-2 mt-2" placeholder="email@example.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingVenue;
