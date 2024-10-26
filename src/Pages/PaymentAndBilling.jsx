'use client'

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreditCard, Trash2, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { addPaymentMethod, deletePaymentMethod, getPaymentMethods } from '../store/action/paymentMethodAction';


export default function PaymentAndBilling() {
  const dispatch = useDispatch();
  const paymentMethods = useSelector(state => state.paymentMethods);
  const [billingHistoryExpanded, setBillingHistoryExpanded] = useState(true);
  const [paymentMethodsExpanded, setPaymentMethodsExpanded] = useState(true);
  const [newCardModalOpen, setNewCardModalOpen] = useState(false);
  const [cardData, setCardData] = useState({ cardNumber: '', expiry: '', cvc: '' });
  const token = localStorage.getItem('token');

  const billingHistory = [
    { id: 1, date: '2023-11-01', amount: 99.99, description: 'Monthly Subscription', status: 'Paid' },
    { id: 2, date: '2023-10-01', amount: 99.99, description: 'Monthly Subscription', status: 'Paid' },
    { id: 3, date: '2023-09-01', amount: 99.99, description: 'Monthly Subscription', status: 'Paid' },
  ];

  // const paymentMethods = [
  //   { id: 1, type: 'Visa', last4: '4242', expiry: '12/24' },
  //   { id: 2, type: 'Mastercard', last4: '5555', expiry: '10/25' },
  // ]

  useEffect(() => {
    dispatch(getPaymentMethods(token)); // Fetch existing payment methods on component mount
  }, [dispatch]);

  const handleAddCard = (e) => {
    e.preventDefault();
    const paymentData = {
      card_number: cardData.cardNumber,
      expiry: cardData.expiry,
      cvc: cardData.cvc,
    };
    dispatch(addPaymentMethod(token, paymentData));
    setNewCardModalOpen(false);
    setCardData({ cardNumber: '', expiry: '', cvc: '' }); // Clear form after submission
  };

  const handleDeleteCard = (paymentId) => {
    dispatch(deletePaymentMethod(paymentId, token));
  };

  const BillingHistoryItem = ({ item }) => (
    <div className="flex justify-between items-center py-4 border-b last:border-b-0">
      <div>
        <p className="font-medium text-gray-800">{item.description}</p>
        <p className="text-sm text-gray-600">{item.date}</p>
      </div>
      <div className="text-right">
        <p className="font-medium text-gray-800">${item.amount.toFixed(2)}</p>
        <p className={`text-sm ${item.status === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
          {item.status}
        </p>
      </div>
    </div>
  )

  const PaymentMethodItem = ({ method }) => (
    <div className="flex justify-between items-center py-4 border-b last:border-b-0">
      <div className="flex items-center">
        <CreditCard className="w-6 h-6 mr-3 text-gray-600" />
        <div>
          <p className="font-medium text-gray-800">{method.type} ending in {method.last4}</p>
          <p className="text-sm text-gray-600">Expires {method.expiry}</p>
        </div>
      </div>
      <button className="text-red-600 hover:text-red-800" onClick={() => handleDeleteCard(method.id)}>
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Payment and Billing</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Billing History</h2>
            <button 
              onClick={() => setBillingHistoryExpanded(!billingHistoryExpanded)}
              className="text-gray-600 hover:text-gray-800"
            >
              {billingHistoryExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
          </div>
          {billingHistoryExpanded && (
            <div>
              {billingHistory.map(item => (
                <BillingHistoryItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Payment Methods</h2>
            <button 
              onClick={() => setPaymentMethodsExpanded(!paymentMethodsExpanded)}
              className="text-gray-600 hover:text-gray-800"
            >
              {paymentMethodsExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
          </div>
          {paymentMethodsExpanded && (
            <div>
              {Array.isArray(paymentMethods) && paymentMethods.length > 0 ? (
                paymentMethods.map(method => (
                  <PaymentMethodItem key={method.id} method={method} />
                ))
              ) : (
                <p>No payment methods available.</p>
              )}
              <button
                onClick={() => setNewCardModalOpen(true)}
                className="mt-4 flex items-center text-blue-600 hover:text-blue-800"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add new payment method
              </button>
            </div>
          )}
        </div>

        {newCardModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4">Add New Payment Method</h3>
              <form className="space-y-4" onSubmit={handleAddCard}>
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                  <input 
                    type="text" 
                    id="cardNumber" 
                    value={cardData.cardNumber} 
                    onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })} 
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                    <input 
                      type="text" 
                      id="expiry" 
                      placeholder="MM/YY" 
                      value={cardData.expiry} 
                      onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })} 
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
                      required 
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                    <input 
                      type="text" 
                      id="cvc" 
                      value={cardData.cvc} 
                      onChange={(e) => setCardData({ ...cardData, cvc: e.target.value })} 
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
                      required 
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setNewCardModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Add Card
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}