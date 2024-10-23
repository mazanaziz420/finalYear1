import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Download, Edit } from 'lucide-react';

export default function MyBookings() {
  const [upcomingExpanded, setUpcomingExpanded] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const [upcomingBookings, setUpcomingBookings] = useState([
    {
      id: 1,
      eventName: 'Corporate Conference',
      date: '2023-12-15',
      venue: 'Grand Hotel Ballroom',
      vendors: ['Catering Co.', 'AV Solutions'],
      staff: ['Event Manager: John Doe', 'Assistant: Jane Smith'],
      status: 'pending',
      paymentStatus: 'partial',
      totalAmount: 5000,
    },
    {
      id: 2,
      eventName: 'Wedding Reception',
      date: '2024-02-20',
      venue: 'Seaside Resort',
      vendors: ['Floral Designs', 'Wedding Cakes Inc.'],
      staff: ['Wedding Planner: Emily Brown'],
      status: 'Pending',
      paymentStatus: 'Partial',
      totalAmount: 10000,
    },
  ]);

  useEffect(() => {
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
  }, [location.state]); // Runs whenever the location.state changes

  const handlePayment = (booking) => {
    // Navigate to PaymentMethod page with the booking data
    navigate('/PaymentMethod', { state: { selectedBooking: booking } });
  };

  const BookingCard = ({ booking }) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{booking.eventName}</h3>
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
        <p className="font-medium text-gray-700">Venue: {booking.venue}</p>
        <p className="text-sm text-gray-600">Vendors: {booking.vendors.join(', ')}</p>
        <p className="text-sm text-gray-600">Staff: {booking.staff.join(', ')}</p>
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
