import React, { useState } from 'react';

const packages = [
  { id: 1, name: 'Basic Package', description: 'Venue rental for 4 hours', price: 400 },
  { id: 2, name: 'Standard Package', description: 'Venue rental for 8 hours with basic catering', price: 800 },
  { id: 3, name: 'Premium Package', description: 'Full day rental with premium catering and AV equipment', price: 1500 },
];

export default function ModifyBooking() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [customRequest, setCustomRequest] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handlePackageSelect = (packageId) => {
    setSelectedPackage(packageId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking details:', {
      selectedPackage,
      customRequest,
      startDate,
      endDate,
      startTime,
      endTime,
    });
    // Here you would typically send this data to a server
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Modify Booking</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Select Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`border rounded-lg p-4 cursor-pointer ${
                selectedPackage === pkg.id ? 'border-blue-500 bg-blue-50' : ''
              }`}
              onClick={() => handlePackageSelect(pkg.id)}
            >
              <h3 className="font-semibold">{pkg.name}</h3>
              <p className="text-sm text-gray-600">{pkg.description}</p>
              <p className="font-bold mt-2">${pkg.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Custom Request</h2>
        <textarea
          className="w-full border rounded-lg p-2"
          rows={4}
          placeholder="Enter any custom requests or requirements..."
          value={customRequest}
          onChange={(e) => setCustomRequest(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Select Date and Time</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Start Date</label>
            <input
              type="date"
              className="w-full border rounded-lg p-2"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2">End Date</label>
            <input
              type="date"
              className="w-full border rounded-lg p-2"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2">Start Time</label>
            <input
              type="time"
              className="w-full border rounded-lg p-2"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2">End Time</label>
            <input
              type="time"
              className="w-full border rounded-lg p-2"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Save Changes
      </button>
    </form>
  );
}