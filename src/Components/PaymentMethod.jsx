import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { createPaymentIntent } from '../store/action/paymentAction';
import { sendBookingRequest, checkAvailability } from '../store/action/bookingAction';
import { toast } from 'react-toastify';
import axios from 'axios'; // Import axios to fetch exchange rate

const PaymentMethod = () => {
  const location = useLocation();
  const { venue: selectedItem, userId } = location.state;

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [platformFee, setPlatformFee] = useState(null);
  const [serviceType, setServiceType] = useState('Standard'); // Default to Standard
  const [totalCostinUSD, setTotalCostInUSD] = useState(0);
  const [totalCostinPKR, setTotalCostInPKR] = useState(0);
  const [totalCostinPKRWithoutPlatformFee, setTotalCostInPKRWithoutPlatformFee] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(1); // Default exchange rate

  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const { clientSecret, loading, error } = useSelector((state) => state.payment);

  const { availableDates, loading: bookingLoading, error: bookingError, bookingSuccess } = useSelector((state) => state.booking);

  const user = JSON.parse(localStorage.getItem('user'));

  // Fetch live USD to PKR exchange rate
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/PKR');
        setExchangeRate(response.data.rates.USD);
      } catch (err) {
        toast.error('Error fetching exchange rate.');
      }
    };
    fetchExchangeRate();
  }, []);

  // useEffect(() => {
  //   if (selectedItem) {
  //     dispatch(checkAvailability(selectedItem._id));
  //   }
  // }, [dispatch, selectedItem]);

  const isDateDisabled = (date) => {
    return Array.isArray(availableDates) && availableDates.includes(date.toISOString().split('T')[0]);
  };

  // Calculate total cost based on selected service, number of days, and people
  useEffect(() => {
    if (checkInDate && checkOutDate && numberOfPeople) {
      const numberOfDays = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24); // Milliseconds to days
      let serviceCost = 0;

      switch (serviceType) {
        case 'Premium':
          serviceCost = selectedItem.pricing.Premium;
          break;
        case 'Platinum': // Assuming Platinum is higher than Premium
          if(!selectedItem.pricing.Premium) {
            serviceCost = selectedItem.pricing.Premium * 1.2; // Example for Platinum: 20% more than Premium
          } else {
            serviceCost = selectedItem.pricing.Premium;
          }
          break;
        case 'Standard':
        default:
          serviceCost = selectedItem.pricing.Standard;
          break;
      }
      
      const costInPKR = serviceCost * numberOfPeople * numberOfDays ;
      setTotalCostInPKRWithoutPlatformFee(costInPKR);

      const platformFee = (costInPKR * 0.02);
      setPlatformFee(platformFee);
      
      const totalCostInPKR = costInPKR + platformFee; 
      setTotalCostInPKR(totalCostInPKR.toFixed(2));

      const costInUSD = totalCostInPKR * exchangeRate; 
      setTotalCostInUSD(costInUSD.toFixed(2));
    }
  }, [checkInDate, checkOutDate, numberOfPeople, serviceType, selectedItem.pricing, exchangeRate]);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error: stripeError, paymentMethod: stripePaymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (stripeError) {
      toast.error(`Payment Error: ${stripeError.message}`);
      return;
    }

    const paymentData = {
      amount: totalCostinUSD, // Use calculated total cost in USD
      payment_method: stripePaymentMethod.id,
      email: user.email,
      venue_id: selectedItem._id
    };

    dispatch(createPaymentIntent(paymentData));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    // if (!checkInDate || !checkOutDate) {
    //   toast.error("Please select check-in and check-out dates.");
    //   return;
    // }

    const bookingData = {
      customer_id: userId,
      customer_email: user.email,
      venueId: selectedItem._id,
      booking_date_range: [
        '22/05/2022',
        '23/05/2022'
      ],
      serviceType,
      numberOfPeople,
    };

    dispatch(sendBookingRequest(bookingData));
  };

  return (
    <div className="flex flex-col md:flex-row p-6 bg-background">
      {/* Left Column */}
      <div className="w-full md:w-1/2 p-4 border border-border rounded-lg bg-card">
        <h2 className="text-lg font-semibold text-foreground">Your Selection</h2>
        {selectedItem ? (
          <div className="mt-4">
            <h3 className="text-xl font-bold">{selectedItem.name_of_venue}</h3>
            <p className="text-muted-foreground">{selectedItem.city}</p>
            <p className="text-muted-foreground">Price: {selectedItem.pricing.Standard} PKR (Standard)</p>
            <p className="text-muted-foreground">Price: {selectedItem.pricing.Premium} PKR (Premium)</p>
            <ul className="mt-2">
              <li className="text-muted-foreground">Free Wifi</li>
              <li className="text-muted-foreground">Parking</li>
            </ul>
          </div>
        ) : (
          <p className="mt-4 text-muted-foreground">No selection made.</p>
        )}
        <h2 className="mt-6 text-lg font-semibold text-foreground">Your Booking Details</h2>
        {/* <div className="mt-4">
          <p className="text-muted-foreground">
            Check-in: {checkInDate ? checkInDate.toLocaleDateString() : 'Not selected'}
          </p>
          <p className="text-muted-foreground">
            Check-out: {checkOutDate ? checkOutDate.toLocaleDateString() : 'Not selected'}
          </p>
        </div> */}
        <p className=' text-xs text-neutral-600'>Platform Fee is 2% of Total Service Charges</p>
        <p className=' text-lg text-black'>Total Service Charges: Rs. {totalCostinPKRWithoutPlatformFee}</p>
        <p className=' text-lg text-black'>Platoform Fee: Rs. {platformFee}</p>
        <p className="mt-4 text-muted-foreground">Total Cost: Rs. {totalCostinPKR} </p>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 p-4 border border-border rounded-lg bg-card">
        <h2 className="text-lg font-semibold text-foreground">Your Details</h2>

        <form className="mt-4" onSubmit={handleBookingSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground" htmlFor="people_quantity">
              Number of people *
            </label>
            <input
              className="mt-1 block w-full border border-border rounded-lg p-2 bg-inherit"
              type="number"
              id="people_quantity"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground">Service Type*</label>
            <div className="mt-2">
              <label className="mr-4">
                <input
                  type="radio"
                  name="serviceType"
                  value="Standard"
                  checked={serviceType === 'Standard'}
                  onChange={() => setServiceType('Standard')}
                />{' '}
                Standard
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="serviceType"
                  value="Premium"
                  checked={serviceType === 'Premium'}
                  onChange={() => setServiceType('Premium')}
                />{' '}
                Premium
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="serviceType"
                  value="Platinum"
                  checked={serviceType === 'Platinum'}
                  onChange={() => setServiceType('Platinum')}
                />{' '}
                Platinum
              </label>
            </div>
          </div>

          {/* <div className="mb-4">
            <label className="block text-sm font-medium text-foreground" htmlFor="check-in">
              Check-in Date *
            </label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              className="mt-1 block w-full border border-border rounded-lg p-2 bg-inherit"
              required
              filterDate={isDateDisabled}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground" htmlFor="check-out">
              Check-out Date *
            </label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              className="mt-1 block w-full border border-border rounded-lg p-2 bg-inherit"
              required
              filterDate={isDateDisabled}
            />
          </div> */}

          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground" htmlFor="payment-method">
              Select Payment Method *
            </label>
            <select
              className="mt-1 block w-full border border-border rounded-lg p-2 bg-inherit"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground" htmlFor="card-details">
              Card Details *
            </label>
            <CardElement className="p-2 border border-border rounded-lg bg-inherit" />
          </div>

          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Complete Booking'}
          </button>
        </form>

        {error && <p className="text-red-500 mt-2">Error: {error}</p>}
        {bookingSuccess && <p className="text-green-500 mt-2">Booking submitted successfully!</p>}
      </div>
    </div>
  );
};

export default PaymentMethod;
