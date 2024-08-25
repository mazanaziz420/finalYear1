import React from 'react';
import Sidebar from './Sidebar';

const ReportsPage = () => {
  return (
    <div className="flex">
            <Sidebar />
    <div>
      <h2 className="text-2xl font-bold mb-4">Reports</h2>
      {/* Add your Reports content here */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold">Report Overview</h3>
        {/* Placeholder for reports */}
      </div>
    </div>
    </div>
  );
};

export default ReportsPage;
