import React from 'react';
import Sidebar from './Sidebar';

const IntegrationsPage = () => {
  return (
    <div className="flex">
            <Sidebar />
    <div>
      <h2 className="text-2xl font-bold mb-4">Integrations</h2>
      {/* Add your Integrations content here */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold">Integration Settings</h3>
        {/* Placeholder for integrations */}
      </div>
    </div>
    </div>
  );
};

export default IntegrationsPage;
