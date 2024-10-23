import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';


const OrganizerPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Marque');
  const [selectedCity, setSelectedCity] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const cities = ['All', 'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Peshawar'];

  const properties = {
    Marque: [
      { id: 1, title: 'Marque 1', description: 'Description of Marque 1', image: 'https://via.placeholder.com/150', price: 100, city: 'Lahore' },
      { id: 2, title: 'Marque 2', description: 'Description of Marque 2', image: 'https://via.placeholder.com/150', price: 150, city: 'Karachi' },
      { id: 3, title: 'Marque 3', description: 'Description of Marque 3', image: 'https://via.placeholder.com/150', price: 200, city: 'Islamabad' },
      { id: 4, title: 'Marque 4', description: 'Description of Marque 4', image: 'https://via.placeholder.com/150', price: 250, city: 'Rawalpindi' },
      { id: 5, title: 'Marque 5', description: 'Description of Marque 5', image: 'https://via.placeholder.com/150', price: 300, city: 'Peshawar' },
      { id: 6, title: 'Marque 6', description: 'Description of Marque 6', image: 'https://via.placeholder.com/150', price: 350, city: 'Lahore' },
    ],
    Apartments: [
      { id: 1, title: 'Apartment 1', description: 'Description of Apartment 1', image: 'https://via.placeholder.com/150', price: 500, city: 'Lahore' },
      { id: 2, title: 'Apartment 2', description: 'Description of Apartment 2', image: 'https://via.placeholder.com/150', price: 600, city: 'Karachi' },
      { id: 3, title: 'Apartment 3', description: 'Description of Apartment 3', image: 'https://via.placeholder.com/150', price: 700, city: 'Islamabad' },
      { id: 4, title: 'Apartment 4', description: 'Description of Apartment 4', image: 'https://via.placeholder.com/150', price: 800, city: 'Rawalpindi' },
      { id: 5, title: 'Apartment 5', description: 'Description of Apartment 5', image: 'https://via.placeholder.com/150', price: 900, city: 'Peshawar' },
      { id: 6, title: 'Apartment 6', description: 'Description of Apartment 6', image: 'https://via.placeholder.com/150', price: 1000, city: 'Lahore' },
    ],
    'Guest House': [
      { id: 1, title: 'Guest House 1', description: 'Description of Guest House 1', image: 'https://via.placeholder.com/150', price: 200, city: 'Lahore' },
      { id: 2, title: 'Guest House 2', description: 'Description of Guest House 2', image: 'https://via.placeholder.com/150', price: 300, city: 'Karachi' },
      { id: 3, title: 'Guest House 3', description: 'Description of Guest House 3', image: 'https://via.placeholder.com/150', price: 400, city: 'Islamabad' },
      { id: 4, title: 'Guest House 4', description: 'Description of Guest House 4', image: 'https://via.placeholder.com/150', price: 500, city: 'Rawalpindi' },
      { id: 5, title: 'Guest House 5', description: 'Description of Guest House 5', image: 'https://via.placeholder.com/150', price: 600, city: 'Peshawar' },
      { id: 6, title: 'Guest House 6', description: 'Description of Guest House 6', image: 'https://via.placeholder.com/150', price: 700, city: 'Lahore' },
    ],
  };

  const filteredItems = (items) =>
    items.filter(
      (item) =>
        (selectedCity === 'All' || item.city === selectedCity) &&
        item.price >= priceRange[0] &&
        item.price <= priceRange[1]
    );

  return (
    <div className="flex">
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        
        <div className="mb-4">
          <button
            onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
            className="w-full text-left px-4 py-2 bg-gray-200 text-gray-700 rounded-lg mb-2"
          >
            Location
          </button>
          {isLocationDropdownOpen && (
            <ul className="pl-4">
              {cities.map((city) => (
                <li key={city}>
                  <button
                    className={`block w-full text-left px-4 py-2 mb-2 rounded-lg ${
                      selectedCity === city
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700'
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

        <div className="mb-4">
          <button
            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            className="w-full text-left px-4 py-2 bg-gray-200 text-gray-700 rounded-lg mb-2"
          >
            Property Type
          </button>
          {isCategoryDropdownOpen && (
            <ul className="pl-4">
              {Object.keys(properties).map((category) => (
                <li key={category}>
                  <button
                    className={`block w-full text-left px-4 py-2 mb-2 rounded-lg ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsCategoryDropdownOpen(false);
                    }}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-4">Price Range</h2>
          <div className="flex items-center mb-4">
            <input
              type="number"
              min="0"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              className="w-1/2 p-2 mr-2 border rounded"
            />
            <span className="mx-2">-</span>
            <input
              type="number"
              min="0"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              className="w-1/2 p-2 ml-2 border rounded"
            />
          </div>
        </div>
      </div>
      <div className="w-3/4 p-4">
        <div className="flex flex-col items-center w-full">
          {filteredItems(properties[selectedCategory]).map((property) => (
            <Link to={`/description/${selectedCategory}/${property.id}`} key={property.id} className="w-full mb-4">
              <Card
                title={property.title}
                description={property.description}
                image={property.image}
                price={property.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizerPage;