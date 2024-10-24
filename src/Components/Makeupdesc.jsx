import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

const dummyData = {
  id: '1',
  name: 'Glamour Glow Makeup Studio',
  profileImage: '/placeholder.svg?height=100&width=100',
  price: {
    gold: 25000,
    platinum: 35000,
    silver: 15000
  },
  images: [
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600'
  ],
  overview: {
    city: 'Islamabad',
    address: '123 Beauty Lane, F-10 Markaz, Islamabad'
  },
  servicesOffered: ['Bridal', 'Groom', 'Family'],
  description: 'Glamour Glow Makeup Studio is your premier destination for all your makeup needs. With years of experience and a team of skilled artists, we specialize in bridal, groom, and family makeup services. Our studio is equipped with the latest tools and premium products to ensure you look your absolute best for any occasion.',
  reviews: {
    average: 4.8,
    count: 120,
    items: [
      { id: '1', name: 'Ayesha Khan', avatar: '/placeholder.svg?height=50&width=50', comment: 'Absolutely loved my bridal makeup! The artist was so professional and made me feel beautiful.', rating: 5 },
      { id: '2', name: 'Fahad Ali', avatar: '/placeholder.svg?height=50&width=50', comment: 'Great experience for groom makeup. Natural look that photographed well.', rating: 4 },
      { id: '3', name: 'Sana Malik', avatar: '/placeholder.svg?height=50&width=50', comment: 'Did makeup for my whole family for a wedding. Everyone looked amazing!', rating: 5 }
    ]
  },
  relatedVendors: [
    { id: '2', name: 'Elegant Looks', service: 'Makeup', price: 20000, image: '/placeholder.svg?height=200&width=300' },
    { id: '3', name: 'Bridal Beauty', service: 'Makeup', price: 30000, image: '/placeholder.svg?height=200&width=300' },
    { id: '4', name: 'Glow Studio', service: 'Makeup', price: 18000, image: '/placeholder.svg?height=200&width=300' },
    { id: '5', name: 'Perfect Face', service: 'Makeup', price: 25000, image: '/placeholder.svg?height=200&width=300' },
    { id: '6', name: 'Makeup Magic', service: 'Makeup', price: 22000, image: '/placeholder.svg?height=200&width=300' }
  ]
}

export default function MakeupBusinessDetails() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [businessData, setBusinessData] = useState(dummyData)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % businessData.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + businessData.images.length) % businessData.images.length)
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
        <div className="text-2xl font-bold">Starting from PKR {Math.min(...Object.values(businessData.price))}</div>
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
        <div className="flex items-center mb-2">
          <MapPin className="w-5 h-5 mr-2" />
          <p>{businessData.overview.city}</p>
        </div>
        <p>{businessData.overview.address}</p>
      </div>

      {/* Services Offered */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Services Offered</h2>
        <div className="flex flex-wrap gap-2">
          {businessData.servicesOffered.map((service, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(businessData.price).map(([package, price]) => (
            <div key={package} className="border rounded-lg p-4 text-center">
              <h3 className="font-semibold text-lg mb-2 capitalize">{package} Package</h3>
              <p className="text-2xl font-bold">PKR {price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Description</h2>
        <p>{businessData.description}</p>
      </div>

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
                <p className="text-sm text-gray-600">{vendor.service}</p>
                <p className="text-sm font-bold mt-2">PKR {vendor.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}