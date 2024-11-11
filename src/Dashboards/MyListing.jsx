import React, { useEffect, useState } from 'react';
import { Pencil, Trash, Plus } from 'lucide-react'; // Import icons from lucide-react
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { getVenueByUser } from '../store/action/venuProviderAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const initialListings = [
  {
    id: 1,
    venueName: 'Grand Ballroom',
    venueType: 'Banquet Hall',
    capacity: 300,
    price: 5000,
  },
  {
    id: 2,
    venueName: 'Rooftop Terrace',
    venueType: 'Outdoor Venue',
    capacity: 100,
    price: 3000,
  },
  {
    id: 3,
    venueName: 'Garden Pavilion',
    venueType: 'Garden Venue',
    capacity: 150,
    price: 3500,
  },
];

const MyListings = () => {
  const dispatch = useDispatch();
  const { venuesByUsers } = useSelector((state) => state.venueProvider);
  const token = localStorage.getItem('token');
  const defaultPrice = 5000;

  useEffect(() => {
    dispatch(getVenueByUser(token));
  }, [token, dispatch]);

  const [listings, setListings] = useState(initialListings);
  const [isEditing, setIsEditing] = useState(false);
  const [currentListing, setCurrentListing] = useState(null);

  const handleEditListing = (listing) => {
    setCurrentListing(listing);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setListings((prev) =>
      prev.map((listing) =>
        listing.id === currentListing.id ? currentListing : listing
      )
    );
    setIsEditing(false);
    setCurrentListing(null);
  };

  const handleDeleteListing = (id) => {
    setListings(listings.filter((listing) => listing.id !== id));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Listings</h1>
        <Link to="/MainApp">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
          
        >
          <Plus className="inline mr-1" /> Add New Listing
        </button>
        </Link>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {venuesByUsers.map((listing) => (
            <div key={listing._id} className="border rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-bold">{listing.name_of_venue}</h2>
              <p className="text-sm text-gray-500">Type: {listing.type_of_property}</p>
              <p className="text-sm text-gray-500">Capacity: {listing.capacity}</p>
              <p className="text-sm text-gray-500">Price: ${listing.price ? listing.price.toLocaleString() : defaultPrice}</p>
              <div className="mt-4 flex space-x-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded-md flex items-center"
                  onClick={() => handleEditListing(listing)}
                >
                  <Pencil className="mr-1" /> Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md flex items-center"
                  onClick={() => handleDeleteListing(listing._id)}
                >
                  <Trash className="mr-1" /> Delete
                </button>
              </div>
            </div>
            
          ))}
        </div>
      </div>

      {isEditing && currentListing && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Listing</h2>
            <input
              type="text"
              className="border rounded-md p-2 w-full mb-2"
              value={currentListing.venueName}
              onChange={(e) => setCurrentListing({ ...currentListing, venueName: e.target.value })}
              placeholder="Venue Name"
            />
            <input
              type="text"
              className="border rounded-md p-2 w-full mb-2"
              value={currentListing.venueType}
              onChange={(e) => setCurrentListing({ ...currentListing, venueType: e.target.value })}
              placeholder="Venue Type"
            />
            <input
              type="number"
              className="border rounded-md p-2 w-full mb-2"
              value={currentListing.capacity}
              onChange={(e) => setCurrentListing({ ...currentListing, capacity: Number(e.target.value) })}
              placeholder="Capacity"
            />
            <input
              type="number"
              className="border rounded-md p-2 w-full mb-2"
              value={currentListing.price || defaultPrice}
              onChange={(e) => setCurrentListing({ ...currentListing, price: Number(e.target.value) })}
              placeholder="Price"
            />
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleSaveEdit}
              >
                Save
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
                onClick={() => {
                  setIsEditing(false);
                  setCurrentListing(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyListings;
