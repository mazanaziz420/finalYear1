import React, { useState } from 'react';

const MakeupVendorForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinLocation, setPinLocation] = useState('');
  const [address, setAddress] = useState('');
  const [services, setServices] = useState([]);
  const [pricing, setPricing] = useState({ gold: '', platinum: '', silver: '' });
  const [profilePicture, setProfilePicture] = useState(null);
  const [portfolioPictures, setPortfolioPictures] = useState([]);
  const [description, setDescription] = useState('');
 
  

  const handleServicesChange = (service) => {
    setServices((prevServices) =>
      prevServices.includes(service)
        ? prevServices.filter((s) => s !== service)
        : [...prevServices, service]
    );
  };

  const handlePortfolioChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + portfolioPictures.length > 10) {
      alert("You can only upload up to 10 pictures or videos.");
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
      city,
      state,
      address, 
    
      website,
      services,
      pricing,
      profilePicture,
      portfolioPictures,
      description,
    
      pinLocation,
    });
  };

  return (
    <form className="bg-gray-200 shadow-lg p-6 rounded-md max-w-4xl mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-6 border-b pb-2">Makeup Vendor Form</h2>
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
        </div>
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile-picture">
            Profile Picture
          </label>
          <input
            type="file"
            id="profile-picture"
            accept="image/*"
            onChange={(e) => setProfilePicture(e.target.files[0])}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Services</label>
          <div className="flex flex-wrap">
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleServicesChange('Bridal Makeup')}
              />
              <span className="ml-2">Bridal Makeup</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleServicesChange('Family Makeup')}
              />
              <span className="ml-2">Family  Makeup</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleServicesChange('Groom Makeup')}
              />
              <span className="ml-2">Groom Makeup</span>
            </label>
            {/* Add more services as needed */}
          </div>
        </div>
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Pricing</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gold-package">
                Gold Package
              </label>
              <input
                type="text"
                id="gold-package"
                value={pricing.gold || ''}
                onChange={(e) => setPricing({ ...pricing, gold: e.target.value })}
                className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="platinum-package">
                Platinum Package
              </label>
              <input
                type="text"
                id="platinum-package"
                value={pricing.platinum || ''}
                onChange={(e) => setPricing({ ...pricing, platinum: e.target.value })}
                className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="silver-package">
                Silver Package
              </label>
              <input
                type="text"
                id="silver-package"
                value={pricing.silver || ''}
                onChange={(e) => setPricing({ ...pricing, silver: e.target.value })}
                className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
        </div>
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Portfolio Pictures/Videos (Max 10)</label>
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handlePortfolioChange}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Services Offered</label>
          <div className="flex flex-wrap">
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleServicesChange('Door to Door service')}
              />
              <span className="ml-2">Door to Door service</span>
            </label>
            
            {/* Add more services as needed */}
          </div>
        </div>
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

export default MakeupVendorForm;
