import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Chart from './Chart';
import Deposits from './Deposits';
import Recents from './Recents';
import MyStaff from '../Pages/MyStaff';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('Venues'); // Track active section

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <div className="flex-grow p-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Chart */}
            <div className="col-span-2 p-4 bg-white rounded shadow">
              <Chart />
            </div>

            {/* Deposits */}
            <div className="p-4 bg-white rounded shadow">
              <Deposits />
            </div>
          </div>

          <div className="mt-4 p-4 bg-white rounded shadow">
            <Recents />
          </div>

          {/* Conditionally render Staff component only for Venues */}
          {activeSection === 'Venues' && (
            <div className="mt-4 p-4 bg-white rounded shadow">
              <MyStaff />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
