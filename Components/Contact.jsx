import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card1 from './Card1';
import Footer from './Footer';

const HireStaff = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const cities = ['All', 'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Peshawar'];

  const staffCategories = {
    All: [
      { id: 1, name: 'Ali Khan', description: 'Experienced Waiter', image: '/../images/xxx.jpeg', price: 100, city: 'Lahore', details: ['5 years of experience', 'Expert in fine dining service'] },
      { id: 2, name: 'Sara Ahmed', description: 'Expert Chef', image: '/../images/xxx.jpeg', price: 150, city: 'Karachi', details: ['10 years of experience', 'Specializes in Italian cuisine'] },
      { id: 3, name: 'Bilal Khan', description: 'Skilled Bartender', image: '/../images/xxx.jpeg', price: 200, city: 'Islamabad', details: ['7 years of experience', 'Expert in crafting cocktails'] },
      { id: 4, name: 'Aisha Iqbal', description: 'Professional Cleaner', image: '/../images/xxx.jpeg', price: 250, city: 'Rawalpindi', details: ['4 years of experience', 'Specializes in event clean-up'] },
      { id: 5, name: 'Hamza Riaz', description: 'Expert DJ', image: '/../images/xxx.jpeg', price: 300, city: 'Peshawar', details: ['8 years of experience', 'Specializes in weddings and corporate events'] },
    ],
    Chef: [
      { id: 2, name: 'Sara Ahmed', description: 'Expert Chef', image: '/../images/xxx.jpeg', price: 150, city: 'Karachi', details: ['10 years of experience', 'Specializes in Italian cuisine'] },
    ],
    Waiter: [
      { id: 1, name: 'Ali Khan', description: 'Experienced Waiter', image: '/../images/xxx.jpeg', price: 100, city: 'Lahore', details: ['5 years of experience', 'Expert in fine dining service'] },
    ],
    Bartender: [
      { id: 3, name: 'Bilal Khan', description: 'Skilled Bartender', image: '/../images/xxx.jpeg', price: 200, city: 'Islamabad', details: ['7 years of experience', 'Expert in crafting cocktails'] },
    ],
    Cleaner: [
      { id: 4, name: 'Aisha Iqbal', description: 'Professional Cleaner', image: '/../images/xxx.jpeg', price: 250, city: 'Rawalpindi', details: ['4 years of experience', 'Specializes in event clean-up'] },
    ],
    DJ: [
      { id: 5, name: 'Hamza Riaz', description: 'Expert DJ', image: '/../images/xxx.jpeg', price: 300, city: 'Peshawar', details: ['8 years of experience', 'Specializes in weddings and corporate events'] },
    ],
  };

  const filteredItems = (items) =>
    items.filter(
      (item) =>
        (selectedCity === 'All' || item.city === selectedCity) &&
        item.price >= priceRange[0] &&
        item.price <= priceRange[1]
    );

  const renderContent = () => {
    if (!isAuthenticated) {
      return (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please Login or Signup to view this content</h2>
          <div className="flex justify-center">
            <Link to="/login" className="text-white hover:text-zinc-300 mx-2 px-6 py-3 bg-blue-500 rounded-lg shadow-lg">Login</Link>
            <Link to="/signup" className="bg-purple-600 hover:bg-purple-700 text-white mx-2 px-6 py-3 rounded-lg shadow-lg">Signup</Link>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-wrap justify-center">
        {filteredItems(staffCategories[selectedCategory]).map((staff) => (
          <Link to={`/description/${selectedCategory}/${staff.id}`} key={staff.id} className="w-full md:w-1/3 p-4">
            <Card1
              title={staff.name}
              description={staff.description}
              image={staff.image}
              price={staff.price}
              details={staff.details}
            />
          </Link>
        ))}
      </div>
    );
  };

  const handleMinPriceChange = (e) => setPriceRange([+e.target.value, priceRange[1]]);
  const handleMaxPriceChange = (e) => setPriceRange([priceRange[0], +e.target.value]);

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
            Staff Type
          </button>
          {isCategoryDropdownOpen && (
            <ul className="pl-4">
              {Object.keys(staffCategories).map((category) => (
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
              onChange={handleMinPriceChange}
              className="w-1/2 p-2 mr-2 border rounded"
            />
            <span className="mx-2">-</span>
            <input
              type="number"
              min="0"
              value={priceRange[1]}
              onChange={handleMaxPriceChange}
              className="w-1/2 p-2 ml-2 border rounded"
            />
          </div>
        </div>
      </div>
      <div className="w-3/4 p-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default HireStaff;
