import React from 'react';
import Sidebar from './Sidebar';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './RecOrders';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

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

          {/* Recent Orders */}
          <div className="mt-4 p-4 bg-white rounded shadow">
            <Orders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
