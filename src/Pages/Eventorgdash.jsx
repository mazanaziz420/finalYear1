import React from 'react';
import Layout from '../Components/Layout';

const EventOrganizerDashboard = () => {
  return (
    <Layout role="event-organizer">
      <h1 className="text-2xl font-bold mb-6">Event Organizer Dashboard</h1>

      {/* Manage Events Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Manage Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example event card */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-2">Event Title</h3>
            <p className="text-gray-600">Event Date: June 15, 2024</p>
            <p className="text-gray-600">Location: City Hall</p>
            <div className="flex justify-between mt-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </div>
          </div>
          {/* Repeat for more events */}
        </div>
      </section>

      {/* View Bookings Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">View Bookings</h2>
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Event</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example booking row */}
            <tr>
              <td className="p-3">Event Title</td>
              <td className="p-3">John Doe</td>
              <td className="p-3">June 10, 2024</td>
              <td className="p-3 text-green-500">Confirmed</td>
            </tr>
            {/* Repeat for more bookings */}
          </tbody>
        </table>
      </section>

      {/* Profile Management Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Profile Management</h2>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-600">Name: Jane Smith</p>
          <p className="text-gray-600">Email: jane.smith@example.com</p>
          <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">Edit Profile</button>
        </div>
      </section>
    </Layout>
  );
};

export default EventOrganizerDashboard;
