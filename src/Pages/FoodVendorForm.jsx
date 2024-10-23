import React, { useState } from 'react';

const FoodVendorForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinLocation, setPinLocation] = useState('');
  const [address, setAddress] = useState('');
  const [services, setServices] = useState([]);
  const [cuisine, setCuisine] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [portfolioPictures, setPortfolioPictures] = useState([]);
  const [description, setDescription] = useState('');
  
  const handleServicesChange = (service) => {
    setServices((prevServices) =>
      prevServices.includes(service)
        ? prevServices.filter((s) => s !== service)
        : [...prevServices, service]
    );
  };

  const handlePortfolioPicturesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + portfolioPictures.length > 10) {
      alert('You can only upload up to 10 portfolio pictures.');
      return;
    }
    setPortfolioPictures([...portfolioPictures, ...files]);
  };

  const handleAddMenuItem = () => {
    if (newItemName && newItemPrice) {
      setMenuItems([...menuItems, { name: newItemName, price: newItemPrice }]);
      setNewItemName('');
      setNewItemPrice('');
    }
  };

  const handleRemoveMenuItem = (index) => {
    setMenuItems(menuItems.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      name,
      email,
      phone,
      website,
      city,
      state,
      address, 
      services,
      cuisine,
      menuItems,
      coverPhoto,
      portfolioPictures,
      description,
      pinLocation
    });
  };

  return (
    <form className="bg-gray-200 shadow-lg p-6 rounded-md max-w-4xl mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-6 border-b pb-2">Food Vendor Form</h2>
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cuisine">
            Cuisine Type
          </label>
          <select
            id="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select a cuisine type</option>
            <option value="Caterers">Caterers</option>
            <option value="Food Trucks">Food Trucks</option>
            <option value="Bakers & Confectioners">Bakers & Confectioners</option>
            <option value="Live Cooking Stalls">Live Cooking Stalls</option>
            <option value="Buffet Service Providers">Buffet Service Providers</option>
            <option value="Event Platter Services">Event Platter Services</option>
            <option value="Specialty Cuisine Providers">Specialty Cuisine Providers</option>
            <option value="Dessert Bars & Beverage Counters">Dessert Bars & Beverage Counters</option>
            <option value="Biryani & Pulao Specialists">Biryani & Pulao Specialists</option>
            <option value="Halwais (Traditional Sweetmakers)">Halwais (Traditional Sweetmakers)</option>
            <option value="Corporate Catering Services">Corporate Catering Services</option>
            <option value="Private Chefs or Boutique Catering">Private Chefs or Boutique Catering</option>
          </select>
        </div>
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Menu Items</label>
          <div className="flex mb-2">
            <input
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="Item name"
              className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="text"
              value={newItemPrice}
              onChange={(e) => setNewItemPrice(e.target.value)}
              placeholder="Price"
              className="w-1/4 px-4 py-2 border-t border-b border-r focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              type="button"
              onClick={handleAddMenuItem}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add
            </button>
          </div>
          <div className="bg-white p-4 rounded-md max-h-60 overflow-y-auto">
            {menuItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded">
                <span>{item.name}</span>
                <div>
                  <span className="mr-2">${item.price}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveMenuItem(index)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
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
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Portfolio Pictures (up to 10)</label>
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handlePortfolioPicturesChange}
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

export default FoodVendorForm;