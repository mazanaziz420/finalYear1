import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from './Card';

const FoodServices = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || 'Caterers');
  const [selectedCity, setSelectedCity] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const cities = ['All', 'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Peshawar'];

  const services = {
    'Caterers': [
      { id: 1, title: 'Caterer 1', description: 'Catering Service 1', image: 'https://via.placeholder.com/150', price: 500, city: 'Lahore' },
      { id: 2, title: 'Caterer 2', description: 'Catering Service 2', image: 'https://via.placeholder.com/150', price: 700, city: 'Karachi' },
    ],
    'Food Trucks': [
      { id: 1, title: 'Food Truck 1', description: 'Food Truck Service 1', image: 'https://via.placeholder.com/150', price: 200, city: 'Islamabad' },
      { id: 2, title: 'Food Truck 2', description: 'Food Truck Service 2', image: 'https://via.placeholder.com/150', price: 300, city: 'Rawalpindi' },
    ],
    'Bakers': [
      { id: 1, title: 'Baker 1', description: 'Baking Service 1', image: 'https://via.placeholder.com/150', price: 400, city: 'Peshawar' },
      { id: 2, title: 'Baker 2', description: 'Baking Service 2', image: 'https://via.placeholder.com/150', price: 600, city: 'Lahore' },
    ],
  };

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  const filteredItems = (items) =>
    items.filter(
      (item) =>
        (selectedCity === 'All' || item.city === selectedCity) &&
        item.price >= priceRange[0] &&
        item.price <= priceRange[1]
    );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Food Services</h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Filters</h2>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Location</h3>
                <div className="relative">
                  <button
                    onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                    className="w-full text-left px-4 py-2 bg-gray-200 text-gray-700 rounded-lg mb-2 hover:bg-gray-300 transition-colors duration-200"
                  >
                    {selectedCity}
                  </button>
                  {isLocationDropdownOpen && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                      {cities.map((city) => (
                        <li key={city}>
                          <button
                            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                              selectedCity === city ? 'bg-blue-500 text-white' : 'text-gray-700'
                            }`}
                            onClick={() => {
                              setSelectedCity(city);
                              setIsLocationDropdownOpen(false);
                            }}
                          >
                            {city}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Service Type</h3>
                <div className="relative">
                  <button
                    onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                    className="w-full text-left px-4 py-2 bg-gray-200 text-gray-700 rounded-lg mb-2 hover:bg-gray-300 transition-colors duration-200"
                  >
                    {selectedCategory}
                  </button>
                  {isCategoryDropdownOpen && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                      {Object.keys(services).map((cat) => (
                        <li key={cat}>
                          <button
                            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                              selectedCategory === cat ? 'bg-blue-500 text-white' : 'text-gray-700'
                            }`}
                            onClick={() => {
                              setSelectedCategory(cat);
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            {cat}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Price Range</h3>
                <div className="flex items-center mb-4">
                  <input
                    type="number"
                    min="0"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                    className="w-1/2 p-2 mr-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="mx-2">-</span>
                  <input
                    type="number"
                    min="0"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                    className="w-1/2 p-2 ml-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 md:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems(services[selectedCategory]).map((service) => (
                <Link to={`/Fooddesc/${selectedCategory}/${service.id}`} key={service.id} className="block">
                  <Card
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    price={service.price}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodServices;