import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Download, Edit } from 'lucide-react';
import { getBookingsForCustomer } from '../store/action/bookingAction';

export default function MyBookings() {
  const dispatch = useDispatch();
  const { bookingsForCustomer, loading, error } = useSelector((state) => state.booking); // Add loading and error from Redux state
  const [upcomingExpanded, setUpcomingExpanded] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');

  // Use a state to hold bookings or fallback data
  const [upcomingBookings, setUpcomingBookings] = useState([]);

  useEffect(() => {
    // Dispatch action to get bookings
    dispatch(getBookingsForCustomer(token));

    // Check if there's any state passed back from PaymentMethod
    const { bookingId, newStatus, newPaymentStatus } = location.state || {};
    
    if (bookingId && newStatus && newPaymentStatus) {
      setUpcomingBookings((prevBookings) =>
        prevBookings.map((booking) => {
          if (booking.id === bookingId) {
            return { ...booking, status: newStatus, paymentStatus: newPaymentStatus };
          }
          return booking;
        })
      );
    }
  }, [token, dispatch, location.state]); // Runs whenever the location.state or dispatch changes

  useEffect(() => {
    // Update upcomingBookings when bookingsForCustomer changes
    if (bookingsForCustomer) {
      setUpcomingBookings(bookingsForCustomer);
    }
  }, [bookingsForCustomer]); // Runs when bookingsForCustomer state is updated

  const handlePayment = (booking) => {
    // Navigate to PaymentMethod page with the booking data
    navigate('/PaymentMethod', { state: { selectedBooking: booking } });
  };

  const BookingCard = ({ booking }) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{booking.venue_details?.name || ""}</h3>
          <p className="text-gray-600">{booking.date}</p>
        </div>
        <div className="text-right">
          <span className={`px-2 py-1 rounded-full text-sm font-medium ${ 
            booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
            booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {booking.status}
          </span>
        </div>
      </div>
      <div className="mb-4">
        <p className="font-medium text-gray-700">Venue: {booking.venue_details?.name || ""}</p>
        <p className="text-sm text-gray-600">Vendors: {booking.vendors ? booking.vendors.join(', ') : 'No vendors assigned'}</p>
        <p className="text-sm text-gray-600">Staff: {booking.staff ? booking.staff.join(', ') : 'No staff assigned'}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-gray-700">Total Amount: ${booking.totalAmount}</p>
          <p className={`text-sm ${
            booking.paymentStatus === 'Paid' ? 'text-green-600' :
            booking.paymentStatus === 'Partial' ? 'text-yellow-600' :
            'text-red-600'
          }`}>
            Payment Status: {booking.paymentStatus}
          </p>
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center text-blue-600 hover:text-blue-800">
            <Download className="w-4 h-4 mr-1" />
            Invoice
          </button>
          <button className="flex items-center text-blue-600 hover:text-blue-800">
            <Download className="w-4 h-4 mr-1" />
            Receipt
          </button>
        </div>
      </div>
      <Link to='/ModifyBooking'>
        <button className="flex items-center text-gray-600 hover:text-gray-800 mb-2">
          <Edit className="w-4 h-4 mr-1" />
          Modify Booking
        </button>
      </Link>
      <button
        onClick={() => handlePayment(booking)}
        className={`mt-2 w-full py-2 rounded-md ${
          booking.paymentStatus === 'Paid' ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
        disabled={booking.paymentStatus === 'Paid'}
      >
        {booking.paymentStatus === 'Paid' ? 'Payment Completed' : 'Pay Now'}
      </button>
    </div>
  );

  if (loading) {
    return <div className=' min-h-screen w-screen flex justify-center items-center'>Loading...</div>; // Add a loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Handle error state
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Upcoming Bookings</h2>
            <button 
              onClick={() => setUpcomingExpanded(!upcomingExpanded)}
              className="text-gray-600 hover:text-gray-800"
            >
              {upcomingExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
          </div>
          {upcomingExpanded && upcomingBookings.map(booking => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
        
      </div>
    </div>
  );
}
