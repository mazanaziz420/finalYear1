import React from 'react';
import Sidebar from './Sidebar';
const CustomersPage = () => {
  return (
    <div className="flex">
            <Sidebar />
   <div>
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      {/* Add your Customers content here */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold">Customer List</h3>
        {/* Placeholder for customer details */}
      </div>
    </div>
    </div>
  );
};

export default CustomersPage;
