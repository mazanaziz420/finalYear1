import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getVenues } from '../store/action/venuProviderAction';
import Card from './Card';
import Footer from './Footer';
// const { venues, loading, error } = useSelector((state) => state.venueProvider);
const Career = () => {
  const [selectedCategory, setSelectedCategory] = useState('Marque');
  const [selectedCity, setSelectedCity] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const venues = useSelector((state) => state.venueProvider.venues); // Access venues from Redux store
  const isLoading = useSelector((state) => state.venueProvider.loading);
  const error = useSelector((state) => state.venueProvider.error);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsAuthenticated(true);
      dispatch(getVenues());
    } else {
      setIsAuthenticated(false);
    }
  }, [dispatch]);

  const cities = ['All', 'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Peshawar'];

  // Adjust filter function to handle different price keys (Premium, Standard) and trim whitespace in city names
  const filteredItems = (items) => 
    items.filter(
      (item) =>
        (selectedCity === 'All' || item.city.trim() === selectedCity) &&
        (
          (item.pricing.Premium && item.pricing.Premium >= priceRange[0] && item.pricing.Premium <= priceRange[1]) ||
          (item.pricing.Standard && item.pricing.Standard >= priceRange[0] && item.pricing.Standard <= priceRange[1])
        )
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

    if (isLoading) {
      return <div>Loading venues...</div>;
    }

    if (error) {
      return <div>Error fetching venues: {error}</div>;
    }

    // Map through the filtered venues, using a fallback image if no cover_picture or venuePictures exist
    return (
      <div className="flex flex-col items-center w-full">
        {filteredItems(venues).map((venue) => (
          <Link to={`/description/${venue.type_of_property}/${venue._id}`} key={venue._id} className="w-full mb-4">
            <Card
              title={venue.name_of_venue || 'No Name Available'}
              description={venue.place_description || 'No Description Available'}
              image={venue.cover_picture || venue.venuePictures[0] || 'https://via.placeholder.com/150'}
              price={venue.pricing.Premium || venue.pricing.Standard || 'Price not available'}
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
            Property Type
          </button>
          {isCategoryDropdownOpen && (
            <ul className="pl-4">
              {['Wedding Hotels', 'Apartments', 'Guest House'].map((category) => (
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
              className="w-1/2 p-2 mr-2 border rounded bg-inherit"
            />
            <span className="mx-2">-</span>
            <input
              type="number"
              min="0"
              value={priceRange[1]}
              onChange={handleMaxPriceChange}
              className="w-1/2 p-2 ml-2 border rounded bg-inherit"
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

export default Career;
