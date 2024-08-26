import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const DescriptionPage = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  // Sample data fetching logic. Replace with actual data fetching.
  const data = {
    Marque: [
      { id: 1, title: 'Marque 1', description: 'Description of Marque 1', images: ['https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Image+1', 'https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Image+2', 'https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Image+3'], city: 'Sample City', rating: 4.5 },
      { id: 2, title: 'Marque 2', description: 'Description of Marque 2', images: ['https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Image+1', 'https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Image+2', 'https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Image+3'], city: 'Sample City', rating: 4.0 },
    ],
    Apartments: [
      { id: 1, title: 'Apartment 1', description: 'Description of Apartment 1', images: ['https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Image+1', 'https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Image+2', 'https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Image+3'], city: 'Sample City', rating: 4.2 },
      { id: 2, title: 'Apartment 2', description: 'Description of Apartment 2', images: ['https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Image+1', 'https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Image+2', 'https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Image+3'], city: 'Sample City', rating: 3.8 },
    ],
    'Guest House': [
      { id: 1, title: 'Guest House 1', description: 'Description of Guest House 1', images: ['https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Image+1', 'https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Image+2', 'https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Image+3'], city: 'Sample City', rating: 4.6 },
      { id: 2, title: 'Guest House 2', description: 'Description of Guest House 2', images: ['https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Image+1', 'https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Image+2', 'https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Image+3'], city: 'Sample City', rating: 4.1 },
    ],
  };

  const item = data[category].find((i) => i.id.toString() === id);

  // Function to handle booking
  const handleBookNow = () => {
    navigate('/payment-method', { state: item }); // Pass the selected item
  };

  return (
    <div className="p-4">
      <div className="mb-8">
        <div className="flex items-center overflow-x-auto mb-4">
          {item.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${category} ${id} image ${index + 1}`}
              className="w-96 h-auto mr-4 rounded-lg shadow-lg"
            />
          ))}
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
          <p className="text-lg text-gray-600 mb-2">{item.city}</p>
          <div className="flex items-center justify-center mb-4">
            <StarRatings
              rating={item.rating}
              starRatedColor="#FFD700"
              numberOfStars={5}
              starDimension="30px"
              starSpacing="2px"
            />
            <span className="ml-2">{item.rating}</span>
          </div>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
          onClick={handleBookNow} // Handle click event
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DescriptionPage;
