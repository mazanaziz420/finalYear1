import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PaymentMethod = () => {
  const location = useLocation();
  const selectedItem = location.state; // Retrieve the passed item

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="flex flex-col md:flex-row p-6 bg-background">
      {/* Left Column */}
      <div className="w-full md:w-1/2 p-4 border border-border rounded-lg bg-card">
        <h2 className="text-lg font-semibold text-foreground">Your Selection</h2>
        {selectedItem ? (
          <div className="mt-4">
            <h3 className="text-xl font-bold">{selectedItem.title}</h3>
            <p className="text-muted-foreground">{selectedItem.city}</p>
            <p className="text-muted-foreground">Rating: {selectedItem.rating}</p>
            <ul className="mt-2">
              <li className="text-muted-foreground">Free Wifi</li>
              <li className="text-muted-foreground">Parking</li>
              <li className="text-muted-foreground">Swimming pool</li>
            </ul>
          </div>
        ) : (
          <p className="mt-4 text-muted-foreground">No selection made.</p>
        )}
        <h2 className="mt-6 text-lg font-semibold text-foreground">Your Booking Details</h2>
        <div className="mt-4">
          <p className="text-muted-foreground">Check-in: {checkInDate ? checkInDate.toLocaleDateString() : 'Not selected'}</p>
          <p className="text-muted-foreground">Check-out: {checkOutDate ? checkOutDate.toLocaleDateString() : 'Not selected'}</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 p-4 border border-border rounded-lg bg-card">
        <h2 className="text-lg font-semibold text-foreground">Your Details</h2>
        <p className="mt-2 text-red-500">Fill in all required fields to continue</p>
        <p className="text-muted-foreground">You are signed in: farazghaffar811@gmail.com</p>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground" htmlFor="first-name">First name *</label>
            <input className="mt-1 block w-full border border-border rounded-lg p-2" type="text" id="first-name" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground" htmlFor="last-name">Last name *</label>
            <input className="mt-1 block w-full border border-border rounded-lg p-2" type="text" id="last-name" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground" htmlFor="phone">Phone number *</label>
            <input className="mt-1 block w-full border border-border rounded-lg p-2" type="text" id="phone" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground" htmlFor="check-in">Check-in Date *</label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              className="mt-1 block w-full border border-border rounded-lg p-2"
              id="check-in"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground" htmlFor="check-out">Check-out Date *</label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              className="mt-1 block w-full border border-border rounded-lg p-2"
              id="check-out"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground" htmlFor="payment-method">Select Payment Method *</label>
            <select className="mt-1 block w-full border border-border rounded-lg p-2" id="payment-method" required>
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600" type="submit">Complete Booking</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentMethod;
