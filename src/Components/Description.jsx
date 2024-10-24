import { useState } from 'react';
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
// import StarRatings from 'react-star-ratings';
import { getSingleVenue } from '../store/action/venuProviderAction'; // Action to fetch single venue
import { toast } from 'react-toastify';

const DescriptionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg']

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  // Fetch venue data from Redux store
  const { venue, loading, error } = useSelector((state) => state.venueProvider);

  useEffect(() => {
    // Fetch the venue data when the component mounts
    dispatch(getSingleVenue(id));
  }, [dispatch, id]);

  const handleBookNow = () => {
    const user = JSON.parse(localStorage.getItem('user')); // Retrieve user details from localStorage
    if (venue && user) {
      navigate('/payment-method', { state: { venue, userId: user.id } }); // Pass venue and userId to the next page
    } else {
      toast.error('Error: Missing venue or user details.');
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Optional: A loading spinner while data is being fetched
  }

  if (error) {
    toast.error('Failed to load venue details');
    return <div className="text-red-500">{error}</div>; // Display the error message
  }

  if (!venue) {
    return <div>No venue found</div>; // Display message if no venue is found
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile and Price */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img
            src="/placeholder.svg"
            alt="Venue Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <h1 className="text-2xl font-bold">ABC Venue</h1>
        </div>
        <div className="text-2xl font-bold">$100/hour</div>
      </div>

      {/* Image Slider */}
      <div className="relative mb-8">
        <img
          src={images[currentImageIndex]}
          alt={`Venue Image ${currentImageIndex + 1}`}
          className="w-full h-64 object-cover rounded-lg"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Overview */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Overview</h2>
        <p>Type of Property: Conference Hall</p>
        <p>Venue Name: ABC Conference Center</p>
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <h3 className="font-semibold">City</h3>
          <p>New York</p>
        </div>
        <div>
          <h3 className="font-semibold">Address</h3>
          <p>123 Main St, New York, NY 10001</p>
        </div>
        <div>
          <h3 className="font-semibold">Capacity</h3>
          <p>200 people</p>
        </div>
        <div>
          <h3 className="font-semibold">Size</h3>
          <p>2000 sq ft</p>
        </div>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">Availability</h3>
            <p>Mon-Fri: 9AM-9PM</p>
            <p>Sat-Sun: 10AM-6PM</p>
          </div>
          <div>
            <h3 className="font-semibold">Additional Services</h3>
            <ul className="list-disc list-inside">
              <li>Catering</li>
              <li>AV Equipment</li>
              <li>Event Planning</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Amenities</h3>
            <ul className="list-disc list-inside">
              <li>Wi-Fi</li>
              <li>Parking</li>
              <li>Wheelchair Accessible</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Pricing</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">Hourly</h3>
            <p>$100/hour</p>
          </div>
          <div>
            <h3 className="font-semibold">Per Day</h3>
            <p>$800/day</p>
          </div>
          <div>
            <h3 className="font-semibold">Per Week</h3>
            <p>$4000/week</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Description</h2>
        <p>
          ABC Conference Center is a state-of-the-art venue perfect for corporate events, seminars, and workshops. With
          modern amenities and a central location, it's the ideal choice for your next event.
        </p>
      </div>

      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={handleBookNow}>Book Now</button>
      {/* Reviews and Ratings */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Reviews and Ratings</h2>
        <div className="flex items-center mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" />
            ))}
          </div>
          <span className="ml-2">4.5 out of 5 stars (120 reviews)</span>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((review) => (
            <div key={review} className="border-b pb-4">
              <div className="flex items-center mb-2">
                <img src="/placeholder.svg" alt="Reviewer" className="w-8 h-8 rounded-full mr-2" />
                <span className="font-semibold">John Doe</span>
              </div>
              <p>Great venue! The staff was very helpful and the facilities were top-notch.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Venues */}
      <div>
        <h2 className="text-xl font-bold mb-4">Related Venues</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((venue) => (
            <div key={venue} className="border rounded-lg overflow-hidden">
              <img src="/placeholder.svg" alt={`Related Venue ${venue}`} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">Venue {venue}</h3>
                <p className="text-sm text-gray-600">New York, NY</p>
                <p className="text-sm font-bold mt-2">$80/hour</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;