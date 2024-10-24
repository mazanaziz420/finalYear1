import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const dummyData = {
  id: '1',
  name: 'Tasty Bites',
  profileImage: '/placeholder.svg?height=100&width=100',
  price: {
    under: 20,
    daily: 150,
    weekly: 1000
  },
  images: [
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600'
  ],
  overview: {
    cuisine: 'Italian',
    city: 'New York',
    address: '123 Food St, New York, NY 10001'
  },
  menuItems: [
    { name: 'Margherita Pizza', price: 12 },
    { name: 'Spaghetti Carbonara', price: 15 },
    { name: 'Tiramisu', price: 8 },
    { name: 'Caprese Salad', price: 10 },
    { name: 'Lasagna', price: 14 }
  ],
  discounts: [
    { description: '10% off on orders above $50', code: 'TASTY10' },
    { description: 'Free delivery on orders above $30', code: 'FREEDEL' }
  ],
  deals: [
    { description: 'Family meal deal: 2 pizzas + 1 pasta + 1 salad for $40', code: 'FAMILY40' },
    { description: 'Lunch special: Any pasta + drink for $12', code: 'LUNCH12' }
  ],
  description: 'Tasty Bites offers authentic Italian cuisine in the heart of New York. Our chefs use only the freshest ingredients to create mouthwatering dishes that will transport you straight to Italy.',
  reviews: {
    average: 4.5,
    count: 120,
    items: [
      { id: '1', name: 'Alice Smith', avatar: '/placeholder.svg?height=50&width=50', comment: 'The pizza was amazing! Authentic Italian taste.', rating: 5 },
      { id: '2', name: 'Bob Johnson', avatar: '/placeholder.svg?height=50&width=50', comment: 'Great atmosphere and friendly staff. Will come back!', rating: 4 },
      { id: '3', name: 'Carol Williams', avatar: '/placeholder.svg?height=50&width=50', comment: 'The tiramisu was to die for! Highly recommended.', rating: 5 }
    ]
  },
  relatedVendors: [
    { id: '2', name: 'Pasta Paradise', cuisine: 'Italian', price: 25, image: '/placeholder.svg?height=200&width=300' },
    { id: '3', name: 'Pizza Palace', cuisine: 'Italian', price: 20, image: '/placeholder.svg?height=200&width=300' },
    { id: '4', name: 'Gelato Heaven', cuisine: 'Italian', price: 15, image: '/placeholder.svg?height=200&width=300' },
    { id: '5', name: 'Trattoria Delight', cuisine: 'Italian', price: 30, image: '/placeholder.svg?height=200&width=300' },
    { id: '6', name: 'Espresso Express', cuisine: 'Italian', price: 10, image: '/placeholder.svg?height=200&width=300' }
  ]
}

export default function FoodBusinessDetails() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [businessData, setBusinessData] = useState(dummyData)
  const [eventDetails, setEventDetails] = useState({
    guests: '',
    date: '',
    time: '',
    venue: '',
    instructions: ''
  })

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % businessData.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + businessData.images.length) % businessData.images.length)
  }

  const handleEventDetailsChange = (e) => {
    const { name, value } = e.target
    setEventDetails(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile, Name, and Price */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img
            src={businessData.profileImage}
            alt={`${businessData.name} Profile`}
            className="w-16 h-16 rounded-full mr-4"
          />
          <h1 className="text-2xl font-bold">{businessData.name}</h1>
        </div>
        <div className="text-2xl font-bold">Under ${businessData.price.under}</div>
      </div>

      {/* Image Slider */}
      <div className="relative mb-8">
        <img
          src={businessData.images[currentImageIndex]}
          alt={`Business Image ${currentImageIndex + 1}`}
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
        <p>Cuisine: {businessData.overview.cuisine}</p>
        <p>City: {businessData.overview.city}</p>
        <p>Address: {businessData.overview.address}</p>
      </div>

      {/* Menu Items */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Menu Items</h2>
        <div className="bg-white p-4 rounded-md max-h-60 overflow-y-auto">
          {businessData.menuItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded">
              <span>{item.name}</span>
              <span className="font-bold">${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Description</h2>
        <p>{businessData.description}</p>
      </div>

      {/* Event Booking Form */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Book for Your Event</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={eventDetails.guests}
              onChange={handleEventDetailsChange}
              placeholder="Enter number of guests"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={eventDetails.date}
              onChange={handleEventDetailsChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={eventDetails.time}
              onChange={handleEventDetailsChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="venue" className="block text-sm font-medium text-gray-700">Venue for Delivery (Address)</label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={eventDetails.venue}
              onChange={handleEventDetailsChange}
              placeholder="Enter delivery address"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instructions (if any)</label>
            <textarea
              id="instructions"
              name="instructions"
              value={eventDetails.instructions}
              onChange={handleEventDetailsChange}
              placeholder="Enter any special instructions"
              rows="3"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
          </div>
        </form>
      </div>

      <Link to="/BookingConfirmation">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-8">Book Now</button>
      </Link>

      {/* Reviews and Ratings */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Reviews and Ratings</h2>
        <div className="flex items-center mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className={`w-5 h-5 ${star <= Math.round(businessData.reviews.average) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
            ))}
          </div>
          <span className="ml-2">{businessData.reviews.average} out of 5 stars ({businessData.reviews.count} reviews)</span>
        </div>
        <div className="space-y-4">
          {businessData.reviews.items.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <div className="flex items-center mb-2">
                <img src={review.avatar} alt={review.name} className="w-8 h-8 rounded-full mr-2" />
                <span className="font-semibold">{review.name}</span>
              </div>
              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                ))}
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Vendors */}
      <div>
        <h2 className="text-xl font-bold mb-4">Related Vendors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {businessData.relatedVendors.map((vendor) => (
            <div key={vendor.id} className="border rounded-lg overflow-hidden">
              <img src={vendor.image} alt={vendor.name} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{vendor.name}</h3>
                <p className="text-sm text-gray-600">{vendor.cuisine}</p>
                <p className="text-sm font-bold mt-2">Under ${vendor.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}