import React from 'react';

const Card = ({ title, description, image, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
      <img className="h-48 w-full md:w-48 object-cover" src={image} alt={title} />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 mb-2">{description}</p>
        </div>
        <p className="text-blue-500 font-bold text-lg">${price}</p>
      </div>
    </div>
  );
};

export default Card;
