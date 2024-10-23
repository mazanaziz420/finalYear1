import React from 'react';

const rows = [
  { date: '16 Mar, 2019', name: 'Elvis Presley', shipTo: 'Tupelo, MS', paymentMethod: 'VISA •••• 3719', amount: 312.44 },
  { date: '16 Mar, 2019', name: 'Paul McCartney', shipTo: 'London, UK', paymentMethod: 'VISA •••• 2574', amount: 866.99 },
  { date: '16 Mar, 2019', name: 'Tom Scholz', shipTo: 'Boston, MA', paymentMethod: 'MC •••• 1253', amount: 100.81 },
  { date: '16 Mar, 2019', name: 'Michael Jackson', shipTo: 'Gary, IN', paymentMethod: 'AMEX •••• 2000', amount: 654.39 },
  { date: '15 Mar, 2019', name: 'Bruce Springsteen', shipTo: 'Long Branch, NJ', paymentMethod: 'VISA •••• 5919', amount: 212.79 },
];

const RecOrders = () => {

  return (
    <div>
      <h2 className="text-lg font-medium text-blue-600">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Ship To</th>
              <th className="px-4 py-2 text-left">Payment Method</th>
              <th className="px-4 py-2 text-right">Sale Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.date}>
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.shipTo}</td>
                <td className="px-4 py-2">{row.paymentMethod}</td>
                <td className="px-4 py-2 text-right">{`$${row.amount.toFixed(2)}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a href="/RecOrders" className="text-blue-600 hover:underline">See more orders</a>
    </div>
    
  );
};

export default RecOrders;
