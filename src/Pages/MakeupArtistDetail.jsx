import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const MakeupArtistDetail = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [relatedArtists, setRelatedArtists] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  // Booking state
  const [selectedPackage, setSelectedPackage] = useState('basic');
  const [customRequest, setCustomRequest] = useState('');
  const [clientCount, setClientCount] = useState(1);
  const [bookingDate, setBookingDate] = useState('');

  useEffect(() => {
    // Simulating API call to fetch artist data
    const mockArtist = {
      id: 1,
      name: 'Aisha Malik',
      email: 'aisha.malik@example.com',
      phone: '+92 300 1234567',
      city: 'Islamabad',
      state: 'Federal Capital Territory',
      address: '123 Jinnah Avenue, F-6/1',
      website: 'https://aishamalik.com',
      services: ['Bridal Makeup', 'Party Makeup', 'Photoshoot Makeup'],
      pricing: 'Starting from 15,000 PKR',
      profilePicture: '/placeholder.svg?height=400&width=400',
      portfolioPictures: [
        '/placeholder.svg?height=300&width=400',
        '/placeholder.svg?height=300&width=400',
        '/placeholder.svg?height=300&width=400',
      ],
      description: 'Aisha Malik is a renowned makeup artist with over 5 years of experience in bridal and special occasion makeup. Her unique style blends traditional techniques with modern trends, creating stunning looks for her clients.',
      pinLocation: 'https://maps.google.com/?q=33.729388,73.093146',
    };

    setArtist(mockArtist);

    // Mock related artists
    const mockRelatedArtists = [
      { id: 2, name: 'Fatima Khan', city: 'Karachi', rating: 4.7, image: '/placeholder.svg?height=100&width=100' },
      { id: 3, name: 'Zara Ahmed', city: 'Lahore', rating: 4.9, image: '/placeholder.svg?height=100&width=100' },
      { id: 4, name: 'Sana Malik', city: 'Peshawar', rating: 4.6, image: '/placeholder.svg?height=100&width=100' },
    ];

    setRelatedArtists(mockRelatedArtists);

    // Mock reviews
    const mockReviews = [
      { id: 1, user: 'Amina H.', rating: 5, comment: 'Aisha did an amazing job for my wedding. Highly recommended!' },
      { id: 2, user: 'Fatima S.', rating: 4, comment: 'Great makeup artist, very professional and skilled.' },
    ];

    setReviews(mockReviews);
  }, [id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReviewObj = {
      id: reviews.length + 1,
      user: 'Anonymous',
      ...newReview,
    };
    setReviews([...reviews, newReviewObj]);
    setNewReview({ rating: 5, comment: '' });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission (e.g., send to server)
    console.log({ selectedPackage, customRequest, clientCount, bookingDate });
    alert('Booking submitted successfully!');
  };

  if (!artist) {
    return <p className="text-gray-500 text-center py-8">Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64">
          <img
            src={artist.profilePicture}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{artist.name}</h1>
              <div className="flex items-center text-gray-600 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{artist.city}, {artist.state}</span>
              </div>
              <div className="flex items-center text-yellow-500 mb-4">
                {'★★★★★'}
              </div>
              <p className="text-gray-700 mb-4">{artist.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-semibold mb-2">Services:</h3>
                  <div className="flex flex-wrap gap-2">
                    {artist.services.map((service) => (
                      <span key={service} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Pricing:</h3>
                  <p className="text-gray-700">{artist.pricing}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:text-right">
              <Link to="/Booking Confirmation">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Book Now
                </button>
              </Link>
              <div className="flex items-center justify-end gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href={artist.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Website
                </a>
              </div>
              <div className="flex items-center justify-end gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${artist.phone}`} className="text-blue-500 hover:underline">{artist.phone}</a>
              </div>
              <div className="flex items-center justify-end gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${artist.email}`} className="text-blue-500 hover:underline">{artist.email}</a>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {artist.portfolioPictures.map((pic, index) => (
                <img key={index} src={pic} alt={`Portfolio ${index + 1}`} className="w-full h-48 object-cover rounded-md" />
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <p className="text-gray-700 mb-2">{artist.address}</p>
            <a
              href={artist.pinLocation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
            >
              View on Google Maps
            </a>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>
            <form onSubmit={handleBookingSubmit}>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'basic', title: 'Basic Package', description: 'Venue rental for 4 hours', price: '$400' },
                    { name: 'standard', title: 'Standard Package', description: 'Venue rental for 8 hours with basic catering', price: '$800' },
                    { name: 'premium', title: 'Premium Package', description: 'Full day rental with premium catering and AV equipment', price: '$1500' },
                  ].map((pkg) => (
                    <div key={pkg.name} className="border p-4 rounded-lg">
                      <label className="flex items-start">
                        <input
                          type="radio"
                          name="package"
                          value={pkg.name}
                          checked={selectedPackage === pkg.name}
                          onChange={() => setSelectedPackage(pkg.name)}
                          className="mt-1 mr-2"
                        />
                        <div>
                          <div className="font-semibold">{pkg.title}</div>
                          <div className="text-sm text-gray-600">{pkg.description}</div>
                          <div className="font-bold mt-2">{pkg.price}</div>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Custom Request</h3>
                <textarea
                  value={customRequest}
                  onChange={(e) => setCustomRequest(e.target.value)}
                  placeholder="Enter any custom requests or requirements..."
                  className="w-full p-2 border rounded-md"
                  rows="4"
                ></textarea>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Number of Clients and Booking Date</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Number of Clients</label>
                    <input
                      type="number"
                      value={clientCount}
                      onChange={(e) => setClientCount(e.target.value)}
                      min="1"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Booking Date</label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                Submit Booking
              </button>
            </form>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Reviews</h3>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{review.user}</span>
                    <span  className="text-yellow-500">{'★'.repeat(review.rating)}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
            <form onSubmit={handleReviewSubmit} className="mt-4">
              <h4 className="font-semibold mb-2">Leave a Review</h4>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Rating</label>
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Comment</label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Submit Review
              </button>
            </form>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Related Makeup Artists</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedArtists.map((relatedArtist) => (
                <div key={relatedArtist.id} className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4">
                  <img src={relatedArtist.image} alt={relatedArtist.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold">{relatedArtist.name}</h4>
                    <p className="text-sm text-gray-600">{relatedArtist.city}</p>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">{'★'.repeat(Math.round(relatedArtist.rating))}</span>
                      <span className="text-sm text-gray-600">{relatedArtist.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeupArtistDetail;