import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const dummyData = {
  id: '1',
  name: 'John Doe Photography',
  profileImage: '/placeholder.svg?height=100&width=100',
  price: {
    hourly: 100,
    daily: 800,
    weekly: 4000
  },
  images: [
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600'
  ],
  overview: {
    service: 'Photography',
    name: 'John Doe Photography'
  },
  details: {
    city: 'New York',
    address: '123 Main St, New York, NY 10001',
    servicesOffered: ['Wedding Photography', 'Portrait Sessions', 'Event Coverage']
  },
  description: 'John Doe Photography offers professional photography services for all your needs. With years of experience and a keen eye for detail, we capture your precious moments in stunning quality.',
  reviews: {
    average: 4.5,
    count: 120,
    items: [
      { id: '1', name: 'Alice Smith', avatar: '/placeholder.svg?height=50&width=50', comment: 'Amazing photographer! Captured our wedding beautifully.', rating: 5 },
      { id: '2', name: 'Bob Johnson', avatar: '/placeholder.svg?height=50&width=50', comment: 'Great work on our family portraits. Highly recommended!', rating: 4 },
      { id: '3', name: 'Carol Williams', avatar: '/placeholder.svg?height=50&width=50', comment: 'Professional and creative. Will hire again for our next event.', rating: 5 }
    ]
  },
  relatedVendors: [
    { id: '2', name: 'Emma White Photography', service: 'Photography', price: 90, image: '/placeholder.svg?height=200&width=300' },
    { id: '3', name: 'Capture Moments', service: 'Photography', price: 85, image: '/placeholder.svg?height=200&width=300' },
    { id: '4', name: 'Lens Master', service: 'Photography', price: 95, image: '/placeholder.svg?height=200&width=300' },
    { id: '5', name: 'Perfect Shot Studios', service: 'Photography', price: 80, image: '/placeholder.svg?height=200&width=300' },
    { id: '6', name: 'Visual Storytellers', service: 'Photography', price: 100, image: '/placeholder.svg?height=200&width=300' }
  ],
  packages: [
    { name: 'Silver', description: 'Basic photography package', price: 500 },
    { name: 'Gold', description: 'Premium photography package', price: 1000 },
    { name: 'Platinum', description: 'Deluxe photography package', price: 1500 }
  ],
  vendorType: 'Photography'
}

export default function VendorDetails() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [vendorData, setVendorData] = useState(dummyData)
  const [selectedPackage, setSelectedPackage] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [customRequest, setCustomRequest] = useState('')

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % vendorData.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + vendorData.images.length) % vendorData.images.length)
  }

  const isBookingComplete = selectedPackage && startDate && endDate && startTime && endTime

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile, Name, and Price */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img
            src={vendorData.profileImage}
            alt={`${vendorData.name} Profile`}
            className="w-16 h-16 rounded-full mr-4"
          />
          <h1 className="text-2xl font-bold">{vendorData.name}</h1>
        </div>
        <div className="text-2xl font-bold">${vendorData.price.hourly}/hour</div>
      </div>

      {/* Image Slider */}
      <div className="relative mb-8">
        <img
          src={vendorData.images[currentImageIndex]}
          alt={`Vendor Image ${currentImageIndex + 1}`}
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
        <p>Service: {vendorData.overview.service}</p>
        <p>Vendor Name: {vendorData.overview.name}</p>
      </div>

      {/* Details */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">City</h3>
            <p>{vendorData.details.city}</p>
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p>{vendorData.details.address}</p>
          </div>
          <div>
            <h3 className="font-semibold">Services Offered</h3>
            <ul className="list-disc list-inside">
              {vendorData.details.servicesOffered.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {vendorData.packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`border rounded-lg p-4 cursor-pointer ${
                selectedPackage === pkg.name ? 'border-blue-500 bg-blue-50' : ''
              }`}
              onClick={() => setSelectedPackage(pkg.name)}
            >
              <h3 className="font-semibold">{pkg.name}</h3>
              <p className="text-sm text-gray-600">{pkg.description}</p>
              <p className="font-bold mt-2">${pkg.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Request Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Custom Request</h2>
        <textarea
          className="w-full border rounded-lg p-2"
          rows={4}
          placeholder="Enter any custom requests or requirements..."
          value={customRequest}
          onChange={(e) => setCustomRequest(e.target.value)}
        ></textarea>
      </div>

      {/* Date and Time Selection */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Select Date and Time</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Start Date</label>
            <input
              type="date"
              className="w-full border rounded-lg p-2"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2">End Date</label>
            <input
              type="date"
              className="w-full border rounded-lg p-2"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2">Start Time</label>
            <input
              type="time"
              className="w-full border rounded-lg p-2"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2">End Time</label>
            <input
              type="time"
              className="w-full border rounded-lg p-2"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <Link to={isBookingComplete ? "/BookingConfirmaat" : "#"}>
        <button
          className={`w-full bg-blue-500 text-white px-4 py-2 rounded mb-8 ${!isBookingComplete && 'opacity-50 cursor-not-allowed'}`}
          disabled={!isBookingComplete}
        >
          {isBookingComplete ? "Book Now" : "Please select package, date, and time"}
        </button>
      </Link>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Description</h2>
        <p>{vendorData.description}</p>
      </div>

      {/* Reviews and Ratings */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Reviews and Ratings</h2>
        <div className="flex items-center mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className={`w-5 h-5 ${star <= Math.round(vendorData.reviews.average) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
            ))}
          </div>
          <span className="ml-2">{vendorData.reviews.average} out of 5 stars ({vendorData.reviews.count} reviews)</span>
        </div>
        <div className="space-y-4">
          {vendorData.reviews.items.map((review) => (
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
          {vendorData.relatedVendors.map((vendor) => (
            <div key={vendor.id} className="border rounded-lg overflow-hidden">
              <img src={vendor.image} alt={vendor.name} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{vendor.name}</h3>
                <p className="text-sm text-gray-600">{vendor.service}</p>
                <p className="text-sm font-bold mt-2">${vendor.price}/hour</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}