import React, { useState } from 'react';

const VenueForm = () => {
  const [coverPicture, setCoverPicture] = useState(null);
  const [venuePictures, setVenuePictures] = useState([]);
  const [typeOfProperty, setTypeOfProperty] = useState('');
  const [otherPropertyType, setOtherPropertyType] = useState('');
  const [nameOfvenue, setNameOfvenue] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [pinLocation, setPinLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [capacity, setCapacity] = useState('');
  const [size, setSize] = useState('');
  const [placeDescription, setPlaceDescription] = useState('');
  const [availability, setAvailability] = useState([]);
  const [additionalServices, setAdditionalServices] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [pricing, setPricing] = useState({
    silverPrice: '',
    silverDescription: '',
    silverItems: [],
    goldPrice: '',
    goldDescription: '',
    goldItems: [],
    platinumPrice: '',
    platinumDescription: '',
    platinumItems: [],
  });

  const handleAvailabilityChange = (value) => {
    setAvailability((prev) => 
      prev.includes(value) 
        ? prev.filter((item) => item !== value) 
        : [...prev, value]
    );
  };

  const handleAdditionalServicesChange = (value) => {
    setAdditionalServices((prev) => 
      prev.includes(value) 
        ? prev.filter((item) => item !== value) 
        : [...prev, value]
    );
  };

  const handleAmenitiesChange = (value) => {
    setAmenities((prev) => 
      prev.includes(value) 
        ? prev.filter((item) => item !== value) 
        : [...prev, value]
    );
  };

  const handlePricingChange = (e) => {
    const { name, value } = e.target;
    setPricing((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addPackageItem = (tier) => {
    setPricing((prev) => ({
      ...prev,
      [`${tier}Items`]: [...prev[`${tier}Items`], ''],
    }));
  };

  const removePackageItem = (tier, index) => {
    setPricing((prev) => ({
      ...prev,
      [`${tier}Items`]: prev[`${tier}Items`].filter((_, i) => i !== index),
    }));
  };

  const handlePackageItemChange = (tier, index, value) => {
    setPricing((prev) => ({
      ...prev,
      [`${tier}Items`]: prev[`${tier}Items`].map((item, i) => (i === index ? value : item)),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log({
      coverPicture,
      venuePictures,
      typeOfProperty,
      otherPropertyType,
      nameOfvenue,
      state,
      city,
      address,
      pinLocation,
      website,
      capacity,
      size,
      availability,
      additionalServices,
      amenities,
      pricing: {
        ...pricing,
        silverItems: pricing.silverItems,
        goldItems: pricing.goldItems,
        platinumItems: pricing.platinumItems,
      },
      placeDescription,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">List Your Venue</h1>
          
          {/* Venue Details */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Venue Details</h2>
            
            {/* Add Pictures */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Add Pictures</label>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="flex-1 mb-2 sm:mb-0">
                  <label className="text-gray-600 text-sm mb-1 block">Cover Picture</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setCoverPicture(e.target.files[0])}
                    className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-gray-600 text-sm mb-1 block">Pictures of Venue</label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => setVenuePictures([...venuePictures, ...Array.from(e.target.files)])}
                    className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Type of Property */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="typeOfProperty">
                Type of Property
              </label>
              <select
                id="typeOfProperty"
                value={typeOfProperty}
                onChange={(e) => setTypeOfProperty(e.target.value)}
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
              >
                <option value="">Select property type</option>
                <option value="Banquet Halls">Marques/Banquet Halls</option>
                <option value="Wedding Lawns">Wedding Lawns</option>
                <option value="Villa/Farmhouse">Villas</option>
                <option value="Farmhouse">Farmhouse</option>
                <option value="Guest houses">Guest houses</option>
                <option value="Wedding Hotels">Hotels</option>
                <option value="Other">Other</option>
              </select>
              {typeOfProperty === 'Other' && (
                <input
                  type="text"
                  value={otherPropertyType}
                  onChange={(e) => setOtherPropertyType(e.target.value)}
                  placeholder="Please specify"
                  className="mt-2 w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                />
              )}
            </div>

            {/* Venue Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameOfvenue">
                Venue Name
              </label>
              <input
                type="text"
                id="nameOfvenue"
                value={nameOfvenue}
                onChange={(e) => setNameOfvenue(e.target.value)}
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Address Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pinLocation">
                  Pin Location
                </label>
                <input
                  type="text"
                  id="pinLocation"
                  value={pinLocation}
                  onChange={(e) => setPinLocation(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
                  Website (optional)
                </label>
                <input
                  type="text"
                  id="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="capacity">
                  Capacity
                </label>
                <input
                  type="number"
                  id="capacity"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">
                  Size
                </label>
                <input
                  type="text"
                  id="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Availability */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Availability</label>
              <div className="flex flex-wrap -mx-2">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className="px-2 mb-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={availability.includes(day)}
                        onChange={() => handleAvailabilityChange(day)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">{day}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Services */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Additional Services</label>
              <div className="flex flex-wrap -mx-2">
                {['Catering', 'Photography', 'Decoration', 'Security', 'Transportation'].map((service) => (
                  <div key={service} className="px-2 mb-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={additionalServices.includes(service)}
                        onChange={() => handleAdditionalServicesChange(service)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">{service}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Amenities</label>
              <div className="flex flex-wrap -mx-2">
                {['WiFi', 'Parking', 'AC', 'Audio/Visual Equipment', 'Wheelchair Accessible'].map((amenity) => (
                  <div key={amenity} className="px-2 mb-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={amenities.includes(amenity)}
                        onChange={() => handleAmenitiesChange(amenity)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">{amenity}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing & Packages */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">Pricing & Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['Silver', 'Gold', 'Platinum'].map((tier) => (
                  <div key={tier} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{tier} Package</h3>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`${tier.toLowerCase()}Price`}>
                        Price
                      </label>
                      <input
                        type="number"
                        id={`${tier.toLowerCase()}Price`}
                        name={`${tier.toLowerCase()}Price`}
                        value={pricing[`${tier.toLowerCase()}Price`]}
                        onChange={handlePricingChange}
                        className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`${tier.toLowerCase()}Description`}>
                        Package Details
                      </label>
                      <textarea
                        id={`${tier.toLowerCase()}Description`}
                        name={`${tier.toLowerCase()}Description`}
                        value={pricing[`${tier.toLowerCase()}Description`]}
                        onChange={handlePricingChange}
                        className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                        rows="4"
                        placeholder={`Enter details for the ${tier} package...`}
                      />
                      <div className="space-y-2">
                        {pricing[`${tier.toLowerCase()}Items`]?.map((item, index) => (
                          <div key={index} className="flex items-center">
                            <input
                              type="text"
                              value={item}
                              onChange={(e) => handlePackageItemChange(tier.toLowerCase(), index, e.target.value)}
                              className="flex-grow px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                              type="button"
                              onClick={() => removePackageItem(tier.toLowerCase(), index)}
                              className="ml-2 text-red-500 hover:text-red-700"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => addPackageItem(tier.toLowerCase())}
                        className="mt-2 text-blue-500 hover:text-blue-700"
                      >
                        + Add Item
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Place Description */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="placeDescription">
                Place Description
              </label>
              <textarea
                id="placeDescription"
                value={placeDescription}
                onChange={(e) => setPlaceDescription(e.target.value)}
                className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Describe your venue in detail..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit Venue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VenueForm;