import React, { useState } from 'react';

const OrganizerVendorForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [services, setServices] = useState([]);
  const [pricing, setPricing] = useState({
    gold: '',
    platinum: '',
    silver: '',
    goldItems: [],
    platinumItems: [],
    silverItems: []
  });
  
  const [portfolioPictures, setPortfolioPictures] = useState([]);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const [dropdownSelection, setDropdownSelection] = useState('');
  const [otherCategory, setOtherCategory] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [pinLocation, setPinLocation] = useState('');
  const [otherService, setOtherService] = useState(''); // For "Other" category service input

  const handleServicesChange = (service) => {
    setServices((prevServices) =>
      prevServices.includes(service)
        ? prevServices.filter((s) => s !== service)
        : [...prevServices, service]
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

  const handlePortfolioChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + portfolioPictures.length > 10) {
      alert("You can only upload up to 10 media files.");
    } else {
      setPortfolioPictures((prevPictures) => [...prevPictures, ...files]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      name,
      email,
      phone,
      website,
      services,
      pricing,
      coverPhoto,
      portfolioPictures,
      description,
      dropdownSelection,
      otherCategory,
      state,
      city,
      address,
      pinLocation,
    });
  };

  const renderServicesOptions = () => {
    switch (dropdownSelection) {
      case 'Event Planner':
        return (
          <div className="flex flex-wrap">
            {['Consultation', 'Budget Management', 'Venue Booking', 'Scheduling', 'Logistics'].map(service => (
              <label key={service} className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                  onChange={() => handleServicesChange(service)}
                />
                <span className="ml-2">{service}</span>
              </label>
            ))}
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleServicesChange('Others')}
              />
              <span className="ml-2">Others</span>
            </label>
            {services.includes('Others') && (
              <input
                type="text"
                value={otherService}
                onChange={(e) => setOtherService(e.target.value)}
                className="block w-1/2 mx-auto px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Specify other services"
              />
              
            )}
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
          </div>
        );
      case 'Decorators':
        return (
          <div className="flex flex-wrap">
            {['Theme Design', 'Floral Arrangements', 'Table Settings', 'Lighting Design', 'Layout and Design of Venue', 'Custom Decor'].map(service => (
              <label key={service} className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                  onChange={() => handleServicesChange(service)}
                />
                <span className="ml-2">{service}</span>
              </label>
            ))}
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleServicesChange('Others')}
              />
              <span className="ml-2">Others</span>
            </label>
            {services.includes('Others') && (
              <input
                type="text"
                value={otherService}
                onChange={(e) => setOtherService(e.target.value)}
                className="block w-1/2 mx-auto px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Specify other services"
              />
   ) }
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
           
          </div>
        );
      case 'Event Resource Provider':
        return (
          <div className="flex flex-wrap">
            {['Tables', 'Chairs', 'Fans', 'Tents', 'Speakers', 'Mikes', 'Carpets', 'Utensils'].map(service => (
              <label key={service} className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                  onChange={() => handleServicesChange(service)}
                />
                <span className="ml-2">{service}</span>
              </label> 
                
            ))}
          
         
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pricing">
            Pricing 
          </label>
          <input
            type="number"
            id="pricing"
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
          
          
        );
      case 'Other':
        return (
          <>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Other Category</label>
              <input
                type="text"
                value={otherCategory}
                onChange={(e) => setOtherCategory(e.target.value)}
                className="block w-1/2 mx-auto px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              
              
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form className="bg-gray-200 shadow-lg p-6 rounded-md max-w-4xl mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-6 border-b pb-2">Form</h2>
      <div className="text-center mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Specify Yourself</label>
        <select
          value={dropdownSelection}
          onChange={(e) => setDropdownSelection(e.target.value)}
          className="block w-1/2 mx-auto px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">Select an option</option>
          <option value="Event Planner">Event Planner</option>
          <option value="Decorators">Decorators</option>
          <option value="Event Resource Provider">Event Resource Provider</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email (Optional)
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone #
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
            Website (Optional)
          </label>
          <input
            type="text"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cover-photo">
            Cover Photo
          </label>
          <input
            type="file"
            id="cover-photo"
            accept="image/*"
            onChange={(e) => setCoverPhoto(e.target.files[0])}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
            State
          </label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select a state</option>
            <option value="Sindh">Sindh</option>
            <option value="Punjab">Punjab</option>
            <option value="KPK">KPK</option>
            <option value="Balochistan">Balochistan</option>
            <option value="Gilgit">Gilgit</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        {dropdownSelection && dropdownSelection !== 'Other' && (
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Services Offered</label>
            {renderServicesOptions()}
          </div>
        )}
        {dropdownSelection === 'Other' && (
          <>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Portfolio Pictures/Videos (Up to 10 files)</label>
              <input
                type="file"
                id="portfolio-pictures"
                accept="image/*,video/*"
                multiple
                onChange={handlePortfolioChange}
                className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </>
        )}
        {dropdownSelection === 'Other' && (
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pin-location">
              Pin Location (Google Maps)
            </label>
            <input
              type="text"
              id="pin-location"
              value={pinLocation}
              onChange={(e) => setPinLocation(e.target.value)}
              placeholder="Enter location URL or coordinates"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pricing">
            Pricing 
          </label>
          <input
            type="number"
            id="pricing"
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          </div>
        )}
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            rows="4"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default OrganizerVendorForm;
