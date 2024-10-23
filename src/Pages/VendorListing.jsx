import { useState } from 'react';
import vendorImage from '../vendor-image.jpg'; // Importing the image for Vendor card
import OrganizerVendorForm from './OrganizerVendorForm';
import FoodVendorForm from './FoodVendorForm';
import MakeupVendorForm from './MakeupVendorForm';
import EntertainmentVendorForm from './EntertainmentVendorForm';


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
            {/* Makeup Category */}
            <div
              onClick={() => handleCategorySelection('Makeup')}
              className="cursor-pointer p-4 bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <img src="link-to-makeup-image.jpg" alt="Makeup" className="w-full h-32 object-cover rounded-md mb-2" />
              <h3 className="text-lg font-semibold">Makeup</h3>
              <p className="text-sm text-gray-600 mb-2">
                Professional makeup services for events, weddings, and parties.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2" onClick={(e) => { e.stopPropagation(); handleCategorySelection('Makeup'); }}>
                Click here
              </button>
            </div>
    
            {/* Organizer Category */}
            <div
              onClick={() => handleCategorySelection('Organizer')}
              className="cursor-pointer p-4 bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <img src="link-to-organizer-image.jpg" alt="Organizer" className="w-full h-32 object-cover rounded-md mb-2" />
              <h3 className="text-lg font-semibold">Organizer</h3>
              <p className="text-sm text-gray-600 mb-2">
                Event planning and coordination for seamless experiences.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2" onClick={(e) => { e.stopPropagation(); handleCategorySelection('Organizer'); }}>
                Click here
              </button>
            </div>
    
            {/* Food Category */}
            <div
              onClick={() => handleCategorySelection('Food')}
              className="cursor-pointer p-4 bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <img src="link-to-food-image.jpg" alt="Food" className="w-full h-32 object-cover rounded-md mb-2" />
              <h3 className="text-lg font-semibold">Food</h3>
              <p className="text-sm text-gray-600 mb-2">
                Catering and food services for various types of events.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2" onClick={(e) => { e.stopPropagation(); handleCategorySelection('Food'); }}>
                Click here
              </button>
            </div>
    
            {/* Entertainment Category */}
            <div
              onClick={() => handleCategorySelection('Entertainment')}
              className="cursor-pointer p-4 bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <img src="link-to-entertainment-image.jpg" alt="Entertainment" className="w-full h-32 object-cover rounded-md mb-2" />
              <h3 className="text-lg font-semibold">Entertainment</h3>
              <p className="text-sm text-gray-600 mb-2">
                Live shows, music, and entertainment options for events.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2" onClick={(e) => { e.stopPropagation(); handleCategorySelection('Entertainment'); }}>
                Click here
              </button>
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
    
    export default VendorForm;
    
  
  
  // const MainApp = () => {
  //   const [selectedCard, setSelectedCard] = useState('');
  
  //   return (
  //     <div className="container mx-auto py-8">
  //       <h1 className="text-gray-700 font-bold text-center text-3xl font-serif mb-8">Who are you ?</h1><br></br>
  //       {!selectedCard && (
  //         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
  //           <div
  //             onClick={() => setSelectedCard('VenueProvider')}
  //             className="cursor-pointer bg-gray-800 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 "
  //             style={{ height: '350px', width: '400px' , backgroundImage: `url(${venueProviderImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  //           >
  //             <div className="p-2 bg-gray-800 bg-opacity-100 backdrop-filter backdrop-blur-lg">
  //               <h3 className="text-lg text-white  font-semibold">Venue Provider</h3>
  //             </div>
  //           </div>
  //           <div
  //             onClick={() => setSelectedCard('Vendor')}
  //             className="cursor-pointer bg-gray-200 rounded-md shadow-lg hover:shadow-lg transition-shadow duration-200"
  //             style={{ height: '350px',width: '400px', backgroundImage: `url(${vendorImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  //           >
  //             <div className="p-2 bg-gray-800 bg-opacity-100 backdrop-filter backdrop-blur-lg">
  //               <h3 className="text-lg text-white font-semibold">Vendor</h3>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  
  //       {selectedCard === 'VenueProvider' && <VenueProviderForm />}
  //       {selectedCard === 'Vendor' && <VendorForm />}
  //     </div>
  //   );
  
  // };