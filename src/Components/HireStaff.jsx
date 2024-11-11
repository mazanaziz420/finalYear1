// HireStaff.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStaffData } from '../store/action/staffActions';
import Card1 from './Card1';
import Footer from './Footer';

const HireStaff = () => {
  const dispatch = useDispatch();
  const { allStaffData, loading } = useSelector((state) => state.staff); // Access state from reducer
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const cities = ['All', 'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Peshawar'];

  useEffect(() => {
    dispatch(getAllStaffData()); // Dispatch action on mount
  }, [dispatch]);

  const categorizedStaff = allStaffData.reduce((acc, staff) => {
    const category = staff.rolesPerformed || 'All';
    if (!acc[category]) acc[category] = [];
    acc[category].push({
      id: staff._id,
      name: staff.full_name,
      description: staff.relevantSkills,
      image: staff.profilePhoto || '/../images/xxx.png',
      price: parseInt(staff.hourlyRate, 10) || 0,
      city: staff.city.trim(),
      details: [
        `${staff.experienceYears} years of experience`,
        `Skills: ${staff.relevantSkills}`,
        `Preferred Shifts: ${staff.preferredShifts}`
      ]
    });
    return acc;
  }, {
    All: allStaffData.map((staff) => ({
      id: staff._id,
      name: staff.full_name,
      description: staff.relevantSkills,
      image: staff.profilePhoto || '/../images/xxx.png',
      price: parseInt(staff.hourlyRate, 10) || 0,
      city: staff.city.trim(),
      details: [
        `${staff.experienceYears} years of experience`,
        `Skills: ${staff.relevantSkills}`,
        `Preferred Shifts: ${staff.preferredShifts}`
      ]
    }))
  });

  const filteredItems = (items) =>
    items.filter(
      (item) =>
        (selectedCity === 'All' || item.city === selectedCity) &&
        item.price >= priceRange[0] &&
        item.price <= priceRange[1]
    );

  const renderContent = () => {
    if (loading) return <div>Loading staff data...</div>;
    const categoryData = categorizedStaff[selectedCategory] || [];
    return (
      <div className="flex flex-wrap justify-center">
        {filteredItems(categoryData).map((staff) => (
          <Link to={`/Descriptions/${selectedCategory}/${staff.id}`} className="w-full md:w-1/3 p-4" key={staff.id}>
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
                      selectedCity === city ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
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
              {Object.keys(categorizedStaff).map((category) => (
                <li key={category}>
                  <button
                    className={`block w-full text-left px-4 py-2 mb-2 rounded-lg ${
                      selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
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

export default HireStaff;
