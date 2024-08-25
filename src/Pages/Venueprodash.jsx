import React from 'react';
import Layout from '../Components/Layout';

const VenueProviderDashboard = () => {
  return (
    <Layout role="venue-provider">
      <h1 className="text-2xl font-bold mb-6">Venue Provider Dashboard</h1>

      {/* Manage Venues Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Manage Venues</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example venue card */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-2">Venue Name</h3>
            <p className="text-gray-600">Location: 123 Main St</p>
            <p className="text-gray-600">Capacity: 500</p>
            <div className="flex justify-between mt-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </div>
          </div>
          {/* Repeat for more venues */}
        </div>
      </section>

      {/* Booking Requests Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Booking Requests</h2>
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Event</th>
              <th className="p-3 text-left">Organizer</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example booking request row */}
            <tr>
              <td className="p-3">Event Title</td>
              <td className="p-3">John Doe</td>
              <td className="p-3">June 10, 2024</td>
              <td className="p-3 text-yellow-500">Pending</td>
              <td className="p-3">
                <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">Approve</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Decline</button>
              </td>
            </tr>
            {/* Repeat for more booking requests */}
          </tbody>
        </table>
      </section>

      {/* Profile Management Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Profile Management</h2>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-600">Name: Sarah Connor</p>
          <p className="text-gray-600">Email: sarah.connor@example.com</p>
          <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">Edit Profile</button>
        </div>
      </section>
    </Layout>
  );
};

export default VenueProviderDashboard;
