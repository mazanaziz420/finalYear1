import React, { useState } from 'react';

const EntertainmentVendorForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [services, setServices] = useState([]);
  const [pricing, setPricing] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [portfolioVideos, setPortfolioVideos] = useState([]);
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinLocation, setPinLocation] = useState('');

  const handleServicesChange = (service) => {
    setServices((prevServices) =>
      prevServices.includes(service)
        ? prevServices.filter((s) => s !== service)
        : [...prevServices, service]
    );
  };

  const handlePortfolioVideosChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + portfolioVideos.length > 10) {
      alert('You can only upload up to 10 portfolio videos.');
      return;
    }
    setPortfolioVideos([...portfolioVideos, ...files]);
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
      portfolioVideos,
      description,
      city,
      state,
      pinLocation,
    });
  };

  return (
    <form className="bg-gray-200 shadow-lg p-6 rounded-md max-w-4xl mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-6 border-b pb-2">Entertainment Vendor Form</h2>
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
          <input
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pinLocation">
            Pin Location
          </label>
          <input
            type="text"
            id="pinLocation"
            value={pinLocation}
            onChange={(e) => setPinLocation(e.target.value)}
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
                onChange={() => handleServicesChange('Qawwali')}
              />
              <span className="ml-2">Qawwali</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleServicesChange('Solo Singer')}
              />
              <span className="ml-2">Solo Singer</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleServicesChange('Bands')}
              />
              <span className="ml-2">Bands</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleServicesChange('Band-Baja')}
              />
              <span className="ml-2">Band-Baja</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleServicesChange('Choreographers')}
              />
              <span className="ml-2">Choreographers</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleServicesChange('Dancers')}
              />
              <span className="ml-2">Dancers</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleServicesChange('DJ')}
              />
              <span className="ml-2">DJ</span>
            </label>
          </div>
        </div>
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pricing">
            Pricing
          </label>
          <input
            type="text"
            id="pricing"
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverPhoto">
            Cover Photo
          </label>
          <input
            type="file"
            id="coverPhoto"
            accept="image/*"
            onChange={(e) => setCoverPhoto(e.target.files[0])}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Portfolio Videos (up to 10)</label>
          <input
            type="file"
            accept="video/*"
            multiple
            onChange={handlePortfolioVideosChange}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
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

export default EntertainmentVendorForm;
