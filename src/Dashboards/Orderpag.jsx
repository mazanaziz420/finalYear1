// OrdersPage.jsx
import React from 'react';
import Sidebar from './Sidebar';

export default function OrdersPage() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-4">Orders</h1>
                {/* Orders content here */}
            </div>
        </div>
    );
}