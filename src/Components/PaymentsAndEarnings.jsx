import React from 'react';

const PaymentsEarnings = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Payments & Earnings</h1>
      
      {/* Earnings History Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Earnings History</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <p className="text-lg font-bold text-blue-700">Total Earnings</p>
            <p className="text-2xl text-gray-800">$10,000</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <p className="text-lg font-bold text-green-700">Withdrawn</p>
            <p className="text-2xl text-gray-800">$7,000</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <p className="text-lg font-bold text-yellow-700">Pending Payments</p>
            <p className="text-2xl text-gray-800">$3,000</p>
          </div>
        </div>
      </div>
      
      {/* Payment Method and Withdrawal Settings Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment Method & Withdrawal Settings</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600">Payment Method</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg">
              <option>Select Payment Method</option>
              <option>Bank Transfer</option>
              <option>PayPal</option>
              <option>Stripe</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600">Withdrawal Frequency</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg">
              <option>Select Frequency</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg">Save Settings</button>
        </form>
      </div>

      {/* Invoices and Payment Receipts Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Invoices & Payment Receipts</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-700">Invoice #12345 - $500</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Download</button>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-700">Invoice #12346 - $700</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsEarnings;
