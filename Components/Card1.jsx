import React from 'react';

const Card1 = ({ title, description, image, price, details }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        {details && (
          <div className="mt-4">
            {details.map((detail, index) => (
              <p key={index} className="text-gray-600 text-sm">{detail}</p>
            ))}
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${price}
        </span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Hire Staff
        </button>
      </div>
    </div>
  );
};

export default Card1;
