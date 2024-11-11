import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHireRequestsByHirerId } from '../store/action/hiringStaffActions';
import { ChevronDown, ChevronUp, Download, Edit, ArrowLeft } from 'lucide-react';
import Sidebar from '../Dashboards/Sidebar';

export default function MyStaff() {
  const [upcomingExpanded, setUpcomingExpanded] = useState(true);
  const [staffRequests, setStaffRequests] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { hireRequestsByEventType, loading } = useSelector(state => state.hiring);

  useEffect(() => {
    const token = localStorage.getItem('token');

    // Fetch hire requests by event type
    dispatch(getHireRequestsByHirerId(token));
  }, [dispatch, location]);

  useEffect(() => {
    // Format data for display after API response
    if (hireRequestsByEventType && Array.isArray(hireRequestsByEventType)) {
      const formattedRequests = hireRequestsByEventType.map(request => ({
        id: request.hire_request_id,
        eventName: request.eventType,
        date: request.requested_dates[0],  // Assuming the first date as event date
        venue: request.venueLocation,
        // requiredStaff: request.requiredStaff.map(staff => ({
        //   role: staff.role,
        //   count: staff.count,
        //   hired: staff.hired,
        // })),
        status: request.status,
        budget: request.wageOffered,
      }));
      setStaffRequests(formattedRequests);
    }
  }, [hireRequestsByEventType]);

  const handleHireMore = (requestId) => {
    navigate(`/hire-staff/${requestId}`);
  };

  const StaffRequestCard = ({ request }) => {
    // const totalRequired = request.requiredStaff.reduce((sum, staff) => sum + staff.count, 0);
    // const totalHired = request.requiredStaff.reduce((sum, staff) => sum + staff.hired, 0);
    // const hiringProgress = (totalHired / totalRequired) * 100;

    return (
      <div className="bg-white rounded-lg shadow-md mb-4 p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{request.eventName}</h3>
            <p className="text-sm text-gray-600">{request.date}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-sm font-medium ${
            request.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            {request.status}
          </span>
        </div>
        <p className="font-medium text-gray-700 mb-2">Venue: {request.venue}</p>
        {/* <div className="space-y-2">
          {request.requiredStaff.map((staff, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{staff.role}</span>
              <span className="text-sm font-medium">
                {staff.hired} / {staff.count}
              </span>
            </div>
          ))}
        </div> */}
        {/* <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Hiring Progress</span>
            <span>{hiringProgress.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${hiringProgress}%` }}
            ></div>
          </div>
        </div> */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-700">Budget: ${request.budget}</p>
          <div className="space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
              <Edit className="w-4 h-4 inline-block mr-1" />
              Edit Request
            </button>
            <button 
              className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
              onClick={() => handleHireMore(request.id)}
            >
              Hire More Staff
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          className="mb-8 text-gray-700 hover:text-gray-900 flex items-center"
          onClick={() => navigate(-1)}  // Navigate to the previous page
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Staff Hirings</h1>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Staff List</h2>
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={() => setUpcomingExpanded(!upcomingExpanded)}
            >
              {upcomingExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
          </div>
          {upcomingExpanded && staffRequests.length > 0 ? (
            staffRequests.map(request => (
              <StaffRequestCard key={request.id} request={request} />
            ))
          ) : (
            <p>No staff requests available.</p>
          )}
        </div>
        
        <div className="text-center">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 inline-flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Download Hiring Report
          </button>
        </div>
      </div>
    </div>
  );
}
