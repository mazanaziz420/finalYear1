import React from 'react';
import Layout from '../Components/Layout';

const StaffDashboard = () => {
  return (
    <Layout role="staff">
      <h1 className="text-2xl font-bold mb-6">Staff Dashboard</h1>

      {/* Task Management Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Task Management</h2>
        <div className="bg-white p-4 rounded shadow">
          <ul className="list-disc list-inside">
            {/* Example task item */}
            <li className="mb-2">
              <span className="font-semibold">Setup Event Stage</span>
              <p className="text-gray-600">Due: June 15, 2024</p>
              <div className="mt-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Mark as Complete</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Remove</button>
              </div>
            </li>
            {/* Repeat for more tasks */}
          </ul>
        </div>
      </section>

      {/* Event Support Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Event Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example support event card */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-2">Event Title</h3>
            <p className="text-gray-600">Event Date: June 15, 2024</p>
            <p className="text-gray-600">Location: City Hall</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
          </div>
          {/* Repeat for more events */}
        </div>
      </section>

      {/* Profile Management Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Profile Management</h2>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-600">Name: Alex Johnson</p>
          <p className="text-gray-600">Email: alex.johnson@example.com</p>
          <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">Edit Profile</button>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Your Schedule</h2>
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Event</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {/* Example schedule row */}
            <tr>
              <td className="p-3">Event Title</td>
              <td className="p-3">June 10, 2024</td>
              <td className="p-3">City Hall</td>
              <td className="p-3">Stage Setup</td>
            </tr>
            {/* Repeat for more schedule entries */}
          </tbody>
        </table>
      </section>
    </Layout>
  );
};

export default StaffDashboard;
