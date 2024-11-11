import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getStaffData } from '../store/action/staffActions';
import { customerHireStaff, venueProviderHireStaff } from '../store/action/hiringStaffActions';

const StaffDescriptionsAndHiring = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id: staffId } = useParams(); 
    const { staffData } = useSelector((state) => state.staff);

    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const userType = user?.user_type;

    const [formData, setFormData] = useState({
        message: 'I would like to inquire about hiring staff for my event. Please contact me at your earliest convenience.',
        request_date_from: '',  // Added field for event date from
        request_date_to: '',    // Added field for event date to
        time: '',
        wageOffered: '',
        city: '',
        venueLocation: '',
        eventType: '',
        numberOfGuests: '',
    });

    const [loading, setLoading] = useState(true); // Loading state for skeleton

    useEffect(() => {
        if (staffId && token) {
            setLoading(true); 
            dispatch(getStaffData(staffId, token))
                .then(() => setLoading(false))
                .catch(() => setLoading(false)); // Ensure loading stops even on error
        }
    }, [dispatch, staffId, token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!token) {
            alert("Please log in to submit a hiring request.");
            return;
        }

        // Prepare payload for the API request
        const payload = {
            request_date_from: formData.request_date_from,
            request_date_to: formData.request_date_to,
            time: formData.time,
            wageOffered: formData.wageOffered,
            city: formData.city,
            venueLocation: formData.venueLocation,
            eventType: formData.eventType,
            numberOfGuests: formData.numberOfGuests,
            message: formData.message,
        };

        const successCallback = () => {
            navigate("/MyStaff"); // Redirect on success
        };

        if (userType === "CUSTOMER") {
            dispatch(customerHireStaff(staffId, payload, token)).then(successCallback);
        } else if (userType === "VENUE_PROVIDER") {
            dispatch(venueProviderHireStaff(staffId, payload, token)).then(successCallback);
        } else {
            alert("You do not have permission to hire staff.");
        }
    };

    return (
        <div className="flex justify-between max-w-7xl mx-auto p-6 space-x-6">
            {/* Left side - Staff Information */}
            <div className="flex-1">
                {loading ? (
                    <div className="animate-pulse space-y-4">
                        <div className="w-full h-48 bg-gray-300 rounded-md"></div>
                        <div className="h-8 w-1/3 bg-gray-300 rounded-md"></div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="h-6 bg-gray-300 rounded-md"></div>
                            <div className="h-6 bg-gray-300 rounded-md"></div>
                            <div className="h-6 bg-gray-300 rounded-md"></div>
                        </div>
                        <div className="h-8 w-1/3 bg-gray-300 rounded-md mt-6"></div>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <div className="h-6 bg-gray-300 rounded-md"></div>
                            <div className="h-6 bg-gray-300 rounded-md"></div>
                        </div>
                        <div className="h-8 w-1/3 bg-gray-300 rounded-md mt-6"></div>
                    </div>
                ) : (
                    <>
                        <div className=' flex '>
                            <div className="mt-6 p-4 bg-gray-100 rounded-md flex w-full gap-12">
                            <img src={staffData?.profilePhoto || "/../images/xxx.png"} alt="Staff" className="w-16 h-16 object-fill rounded-md" />
                                <div className=' flex flex-col'>
                                    <h2 className="text-xl font-bold">{staffData?.full_name || "Staff Name"}</h2>
                                    <div className="grid grid-cols-3 gap-4 mt-4">
                                        <div>Gender: <span className="font-normal">{staffData?.gender}</span></div>
                                        <div>City: <span className="font-normal">{staffData?.city}</span></div>
                                        <div>Hourly Rate: <span className="font-normal">Rs. {staffData?.hourlyRate}/hour</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-gray-100 rounded-md">
                            <h3 className="text-lg font-bold">Availability</h3>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                <div>Days: <span className="font-normal">{staffData?.daysAvailable}</span></div>
                                <div>Preferred Shifts: <span className="font-normal">{staffData?.preferredShifts}</span></div>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-gray-100 rounded-md">
                            <h3 className="text-lg font-bold">Experiences</h3>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                <div>Years of Experience: <span className="font-normal">{staffData?.experienceYears}</span></div>
                                <div>Previous Employers: <span className="font-normal">{staffData?.previousEmployers}</span></div>
                                <div>Relevant Skills: <span className="font-normal">{staffData?.relevantSkills}</span></div>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-gray-100 rounded-md">
                            <h3 className="text-lg font-bold">Certificates & Trainings</h3>
                            <p>{staffData?.foodCertifications}, {staffData?.tipsCertification}</p>
                        </div>
                        <div className="mt-6 p-4 bg-gray-100 rounded-md">
                            <h3 className="text-lg font-bold">Additional Notes</h3>
                            <p>{staffData?.additionalComments || "No additional comments provided."}</p>
                        </div>
                    </>
                )}
            </div>

            {/* Right side - Inquiry Form */}
            <div className="w-1/3 p-6 bg-white rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className=' flex gap-12'>
                        <div className=' flex flex-col'>
                            <label htmlFor="request_date_from" className="block text-sm font-medium text-gray-700">Event Date From*</label>
                            <input
                                type="date"
                                id="request_date_from"
                                name="request_date_from"
                                value={formData.request_date_from}
                                onChange={handleChange}
                                className="mt-1 block p-2 border rounded-md shadow-sm  bg-inherit"
                                required
                            />
                        </div>
                        <div className=' flex flex-col'>
                            <label htmlFor="request_date_to" className="block text-sm font-medium text-gray-700">Event Date To*</label>
                            <input
                                type="date"
                                id="request_date_to"
                                name="request_date_to"
                                value={formData.request_date_to}
                                onChange={handleChange}
                                className="mt-1 block p-2 border rounded-md shadow-sm  bg-inherit"
                                required
                            />
                        </div>
                    </div>

                    <div className=' mt-4'>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Event Time*</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="mt-1 w-full block p-2 border rounded-md shadow-sm  bg-inherit"
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="wageOffered" className="block text-sm font-medium text-gray-700">Wage Offered (PKR/hour)*</label>
                        <input
                            type="number"
                            id="wageOffered"
                            name="wageOffered"
                            value={formData.wageOffered}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md shadow-sm  bg-inherit"
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City*</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md shadow-sm  bg-inherit"
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="venueLocation" className="block text-sm font-medium text-gray-700">Venue Location*</label>
                        <input
                            type="text"
                            id="venueLocation"
                            name="venueLocation"
                            value={formData.venueLocation}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md shadow-sm  bg-inherit"
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">Event Type</label>
                        <input
                            type="text"
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md shadow-sm  bg-inherit"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
                        <input
                            type="number"
                            id="numberOfGuests"
                            name="numberOfGuests"
                            value={formData.numberOfGuests}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md shadow-sm  bg-inherit"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="3"
                            className="mt-1 block w-full p-2 border rounded-md shadow-sm  bg-inherit"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-6 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
                    >
                        Submit Hiring Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default StaffDescriptionsAndHiring;
