import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitVenueForm } from '../store/action/venuProviderAction';
import venueProviderImage from '../02.jpg'; // Importing the image for Venue Provider card
import vendorImage from '../vendor-image.jpg'; // Importing the image for Vendor card
import OrganizerVendorForm from './OrganizerVendorForm';
import FoodVendorForm from './FoodVendorForm';
import MakeupVendorForm from './MakeupVendorForm';
import EntertainmentVendorForm from './EntertainmentVendorForm';


const VenueProviderForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.venueProvider);

  const [typeOfProperty, setTypeOfProperty] = useState('');
  const [otherPropertyType, setOtherPropertyType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setID] = useState('');  
  const [nameOfvenue, setNameOfvenue] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [pinLocation, setPinLocation] = useState('');
  const [additionalServices, setAdditionalServices] = useState([]);
  const [pricing, setPricing] = useState({ daily: '', weekly: '', hourly: ''});
  const [amenities, setAmenities] = useState([]);
  const [placeDescription, setPlaceDescription] = useState('');
  const [coverPicture, setCoverPicture] = useState(null);
  const [venuePictures, setVenuePictures] = useState([]);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [capacity, setCapacity] = useState('');
  const [size, setSize] = useState('');
  const [availability, setAvailability] = useState('');
  const [rulesAndRegulations, setRulesAndRegulations] = useState('');
  const [specialFeatures, setSpecialFeatures] = useState([]);

  const handleAdditionalServicesChange = (service) => {
    setAdditionalServices((prevServices) =>
      prevServices.includes(service)
        ? prevServices.filter((s) => s !== service)
        : [...prevServices, service]
    );
  };

  const handleAvailabilityChange = (availability) => {
    setAvailability((prevAvailability) =>
      prevAvailability.includes(availability)
        ? prevAvailability.filter((s) => s !== availability)
        : [...prevAvailability, availability]
    );
  };


  const handleAmenitiesChange = (amenity) => {
    setAmenities((prevAmenities) =>
      prevAmenities.includes(amenity)
        ? prevAmenities.filter((a) => a !== amenity)
        : [...prevAmenities, amenity]
    );
  };

  const handleSpecialFeaturesChange = (feature) => {
    setSpecialFeatures((prevFeatures) =>
      prevFeatures.includes(feature)
        ? prevFeatures.filter((f) => f !== feature)
        : [...prevFeatures, feature]
    );
  };

  const handlePricingChange = (e) => {
    const { name, value } = e.target;
    setPricing((prevPricing) => ({
      ...prevPricing,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        firstName,
        lastName,
        email,
        phone,
        id,
        nameOfvenue,
        website,
        typeOfProperty,
        otherPropertyType,
        coverPicture,
        venuePictures,
        city,
        address,
        state,
        capacity,
        size,
        pinLocation,
        placeDescription,
        additionalServices,
        amenities,
        pricing: JSON.stringify(pricing), // Convert pricing to JSON string
        availability,
        rulesAndRegulations,
        specialFeatures,
    };
    dispatch(submitVenueForm(formData));
  };

  return (
    <form className="bg-zinc-200 shadow-lg p-6 rounded-md max-w-4xl mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-6 border-b pb-2">Personal Information</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
          First Name
        </label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
      </div>

      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address (optional)
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
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
      </div>

      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
            ID Card No.
          </label>
          <input
            type="tel"
            id="id"
            value={id}
            onChange={(e) => setID(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
      </div>

      {/* VENUE DETAILS */}
      <h2 className="text-xl font-bold mb-6 border-b pb-2">Venue Details</h2>
      <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Add Pictures</label>
          <div className="flex space-x-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">Cover Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCoverPicture(e.target.files[0])}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Pictures of Venue</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setVenuePictures([...venuePictures, e.target.files[0]])}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="typeOfProperty">
            Type of Property
          </label>
          <select
            id="typeOfProperty"
            value={typeOfProperty}
            onChange={(e) => setTypeOfProperty(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select property type</option>
            <option value="Banquet Halls">Marques/Banquet Halls</option>
            <option value="Wedding Lawns">Wedding Lawns</option>
            <option value="Villa/Farmhouse">Villas</option>
            <option value="Villa/Farmhouse">Farmhouse</option>
            <option value="Guest houses">Guest houses</option>
            <option value="Wedding Hotels">Hotels</option>
            <option value="Other">Other</option>
          </select>
          {typeOfProperty === 'Other' && (
            <input
              type="text"
              placeholder="Please specify"
              className="mt-2 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={otherPropertyType}
              onChange={(e) => setOtherPropertyType(e.target.value)}
            />
          )}
        </div>
      </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameOfvenue">
            Name of Venue
           </label>
          <input
            type="text"
            id="nameOfvenue"
            value={nameOfvenue}
            onChange={(e) => setNameOfvenue(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameOfPlace">
            Name of Place
          </label>
          <input
            type="text"
            id="nameOfPlace"
            value={nameOfPlace}
            onChange={(e) => setNameOfPlace(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div> */}

        
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
            <option value="">Select state</option>
            <option value="Punjab">Punjab</option>
            <option value="Sindh">Sindh</option>
            <option value="Balochistan">Balochistan</option>
            <option value="KPK">KPK</option>
            <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
          </select>
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="City">
            City
          </label>
          <input
            type="tel"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pinLocation">
            Pin Location (Maps)
          </label>
          <input
            type="text"
            id="pinLocation"
            value={pinLocation}
            onChange={(e) => setPinLocation(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        

        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
            Website URL (optional)
          </label>
          <input
            type="url"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="capacity">
            Capacity
          </label>
          <input
            type="number"
            id="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">
            Size (in sq ft)
          </label>
          <input
            type="number"
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Availability">
           
          </label>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">availability</label>
            <div className="flex flex-wrap">
              <label className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                  onChange={() => handleAvailabilityChange('Time')}
                />
                <span className="ml-2">24/7</span>
              </label>
              <label className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                  onChange={() => handleAvailabilityChange('Weekends')}
                />
                <span className="ml-2">Saturday - Sunday</span>
              </label>
              <label className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                  onChange={() => handleAvailabilityChange('WorkingDays')}
                />
                <span className="ml-2">Monday - Friday</span>
              </label>
              <label className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                  onChange={() => handleAvailabilityChange('AllWeek')}
                />
                <span className="ml-2">Monday - Sunday</span>
              </label>
              {/* Add more services as needed */}
            </div>
          </div>

          <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="placeDescription">
            Place Description
          </label>
          <textarea
            id="placeDescription"
            value={placeDescription}
            onChange={(e) => setPlaceDescription(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            rows="4"
          ></textarea>
        </div>

          {/* <input
            type="text"
            id="durationLimitations"
            value={durationLimitations}
            onChange={(e) => setDurationLimitations(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div> */}

        {/* SERVICES / FACILITIES  */}
        
        <h2 className="text-xl font-bold mb-6 border-b pb-2">Facilities</h2>

        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Services</label>
          <div className="flex flex-wrap">
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleAdditionalServicesChange('Decoration')}
              />
              <span className="ml-2">Decoration</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleAdditionalServicesChange('Event Planners')}
              />
              <span className="ml-2">Event Planners</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleAdditionalServicesChange('Photography')}
              />
              <span className="ml-2">Photography</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleAdditionalServicesChange('Videography')}
              />
              <span className="ml-2">Videography</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleAdditionalServicesChange('Resources')}
              />
              <span className="ml-2">Resources</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleAdditionalServicesChange('Entertainment')}
              />
              <span className="ml-2">Entertainment</span>
            </label>
            <label className="inline-flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => handleAdditionalServicesChange('Catering')}
              />
              <span className="ml-2">Catering</span>
            </label>
            {/* Add more checkboxes as needed */}
          </div>
        </div>

        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Amenities</label>
          <div className="flex flex-wrap">
            {['WiFi', 'AC/Heating', 'Fire safety', 'CCTV', 'Security Guards', 'Elevators', 'Ramps', 'Parking', 'Lighting',  'Restrooms'].map((amenity) => (
              <label key={amenity} className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                  onChange={() => handleAmenitiesChange(amenity)}
                />
                <span className="ml-2">{amenity}</span>
              </label>
            ))}
          </div>
        </div>

        <h2 className="text-xl font-bold mb-6 border-b pb-2">Pricing</h2>
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pricing">
            Rates/Pricing
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hourly">
                Hour Price    (per/hour)
              </label>
              <input
                type="text"
                id="hourly"
                name="hourly"
                value={pricing.hourly}
                onChange={handlePricingChange}
                className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="daily">
                Per/Day Price  
              </label>
              <input
                type="text"
                id="daily"
                name="daily"
                value={pricing.daily}
                onChange={handlePricingChange}
                className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weekly">
                Weekly Price  ()
              </label>
              <input
                type="text"
                id="premium"
                name="premium"
                value={pricing.premium}
                onChange={handlePricingChange}
                className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
        </div>
      

      {/* ADDIONTIOANL INFORMATION */}
      <h2 className="text-xl font-bold mb-6 border-b pb-2">Addiontional Information</h2>  
        
        
        
        
        {/* <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Amenities</label>
          <div className="flex flex-wrap">
            {['WiFi', 'AC/Heating', 'Fire safety', 'CCTV', 'Security Guards', 'Elevators', 'Ramps', 'Parking', 'Lighting',  'Restrooms'].map((amenity) => (
              <label key={amenity} className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                  onChange={() => handleAmenitiesChange(amenity)}
                />
                <span className="ml-2">{amenity}</span>
              </label>
            ))}
          </div>
        </div> */}

        
        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialFeatures">
            Special Features
          </label>
          <textarea
            id="specialFeatures"
            value={specialFeatures}
            onChange={(e) => setSpecialFeatures(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4 col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rulesAndRegulations">
            Rules and Regulations (if any)
          </label>
          <textarea
            id="rulesAndRegulations"
            value={rulesAndRegulations}
            onChange={(e) => setRulesAndRegulations(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            rows="4"
          ></textarea>
        </div>
        <label className="block text-gray-700 text-sm font-bold mb-2" >
            I assured that no information is incorrect
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2" >
            I agree to Terms and Conditions
          </label>
        
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            I agree to Privacy Policy
          </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </form>
  );
};




//Vendor form
const VendorForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');
  const [doorToDoorService, setDoorToDoorService] = useState(false);
  const [description, setDescription] = useState('');
  const [coverPicture, setCoverPicture] = useState(null);
  const [venuePictures, setVenuePictures] = useState([]);
  const [errors, setErrors] = useState({});

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    // Reset form fields
    setSubcategory('');
    setName('');
    setCity('');
    setState('');
    setZipCode('');
    setAddress('');
    setDoorToDoorService(false);
    setDescription('');
    setCoverPicture(null);
    setVenuePictures([]);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!selectedCategory) newErrors.selectedCategory = 'Category is required';
    if (!subcategory) newErrors.subcategory = 'Subcategory is required';
    if (!name) newErrors.name = 'Name is required';
    if (!city) newErrors.city = 'City is required';
    if (!state) newErrors.state = 'State is required';
    if (!zipCode) newErrors.zipCode = 'Zip Code is required';
    if (!address) newErrors.address = 'Address is required';
    if (!description) newErrors.description = 'Description is required';
    if (!coverPicture) newErrors.coverPicture = 'Cover Picture is required';
    if (venuePictures.length === 0) newErrors.venuePictures = 'At least one Venue Picture is required';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log({
      selectedCategory,
      subcategory,
      name,
      city,
      state,
      zipCode,
      address,
      doorToDoorService,
      description,
      coverPicture,
      venuePictures,
    });
  };

  return (
    <form className="bg-white p-6 rounded-md shadow-md max-w-lg mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Vendor Form</h2>
      
      {!selectedCategory && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div
            onClick={() => handleCategorySelection('Makeup')}
            className="cursor-pointer p-4 bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-lg font-semibold">Makeup</h3>
          </div>
          <div
            onClick={() => handleCategorySelection('Organizer')}
            className="cursor-pointer p-4 bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-lg font-semibold">Organizer</h3>
          </div>
          <div
            onClick={() => handleCategorySelection('Food')}
            className="cursor-pointer p-4 bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-lg font-semibold">Food</h3>
          </div>
          <div
            onClick={() => handleCategorySelection('Entertainment')}
            className="cursor-pointer p-4 bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-lg font-semibold">Entertainment</h3>
          </div>
        </div>
      )}

      {selectedCategory === 'Organizer' && <OrganizerVendorForm />}
      {selectedCategory === 'Food' && <FoodVendorForm />}
      {selectedCategory === 'Makeup' && <MakeupVendorForm />}
      {selectedCategory === 'Entertainment' && <EntertainmentVendorForm />}
    </form>
  );
};




const MainApp = () => {
  const [selectedCard, setSelectedCard] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/'); // Navigate to '/' if no user is found
      return;
    }

    switch (user.user_type) {
      case 'VENUE_PROVIDER':
        setSelectedCard('VenueProvider');
        break;
      case 'VENDOR':
        setSelectedCard('Vendor');
        break;
      default:
        navigate('/'); // Navigate to '/' if user_type does not match
    }
  }, [navigate]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-gray-700 font-bold text-center text-3xl font-serif mb-8">
        {selectedCard === 'VenueProvider' ? 'Venue Provider' : selectedCard === 'Vendor' ? 'Vendor' : ''}
      </h1>
      <br />
      {!selectedCard && (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            onClick={() => setSelectedCard('VenueProvider')}
            className="cursor-pointer bg-gray-800 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
            style={{ height: '350px', width: '400px', backgroundImage: `url(${venueProviderImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="p-2 bg-gray-800 bg-opacity-100 backdrop-filter backdrop-blur-lg">
              <h3 className="text-lg text-white font-semibold">Venue Provider</h3>
            </div>
          </div>
          <div
            onClick={() => setSelectedCard('Vendor')}
            className="cursor-pointer bg-gray-200 rounded-md shadow-lg hover:shadow-lg transition-shadow duration-200"
            style={{ height: '350px', width: '400px', backgroundImage: `url(${vendorImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="p-2 bg-gray-800 bg-opacity-100 backdrop-filter backdrop-blur-lg">
              <h3 className="text-lg text-white font-semibold">Vendor</h3>
            </div>
          </div>
        </div>
      )}

      {selectedCard === 'VenueProvider' && <VenueProviderForm />}
      {selectedCard === 'Vendor' && <VendorForm />}
    </div>
  );
};

export default MainApp;