import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, DollarSign } from 'lucide-react';

const initialMakeupArtists = [
  { id: 1, name: 'Aisha Malik', city: 'Islamabad', rating: 4.8, price: 15000, type: ['Bridal', 'Family'], image: '/placeholder.svg?height=200&width=300' },
  { id: 2, name: 'Fatima Khan', city: 'Karachi', rating: 4.7, price: 18000, type: ['Bridal', 'Groom'], image: '/placeholder.svg?height=200&width=300' },
  { id: 3, name: 'Zara Ahmed', city: 'Lahore', rating: 4.9, price: 20000, type: ['Bridal', 'Groom', 'Family'], image: '/placeholder.svg?height=200&width=300' },
  { id: 4, name: 'Sana Malik', city: 'Peshawar', rating: 4.6, price: 12000, type: ['Bridal'], image: '/placeholder.svg?height=200&width=300' },
  { id: 5, name: 'Amina Hussain', city: 'Islamabad', rating: 4.5, price: 16000, type: ['Bridal', 'Family'], image: '/placeholder.svg?height=200&width=300' },
  { id: 6, name: 'Nadia Ali', city: 'Karachi', rating: 4.8, price: 22000, type: ['Bridal', 'Groom'], image: '/placeholder.svg?height=200&width=300' },
];

export default function MakeupArtistListing() {
  const [makeupArtists, setMakeupArtists] = useState(initialMakeupArtists);
  const [filters, setFilters] = useState({
    city: '',
    priceRange: '',
    type: [],
  });

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'type') {
      setFilters((prevFilters) => ({
        ...prevFilters,
        type: prevFilters.type.includes(value)
          ? prevFilters.type.filter((t) => t !== value)
          : [...prevFilters.type, value],
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [filterType]: value,
      }));
    }
  };

  const filteredArtists = makeupArtists.filter((artist) => {
    return (
      (filters.city === '' || artist.city === filters.city) &&
      (filters.priceRange === '' ||
        (filters.priceRange === 'low' && artist.price <= 15000) ||
        (filters.priceRange === 'medium' && artist.price > 15000 && artist.price <= 20000) ||
        (filters.priceRange === 'high' && artist.price > 20000)) &&
      (filters.type.length === 0 || filters.type.some((type) => artist.type.includes(type)))
    );
  });

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      {/* Filters */}
      <div className="md:w-1/4 mb-8 md:mb-0 md:mr-8">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>

        {/* City Filter */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">City</h3>
          <select
            value={filters.city}
            onChange={(e) => handleFilterChange('city', e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">All Cities</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Karachi">Karachi</option>
            <option value="Peshawar">Peshawar</option>
            <option value="Lahore">Lahore</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Price Range</h3>
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">All Prices</option>
            <option value="low">Low (Up to 15,000)</option>
            <option value="medium">Medium (15,001 - 20,000)</option>
            <option value="high">High (20,001+)</option>
          </select>
        </div>

        {/* Type Filter */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Type</h3>
          <div className="space-y-2">
            {['Bridal', 'Groom', 'Family'].map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.type.includes(type)}
                  onChange={() => handleFilterChange('type', type)}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Makeup Artist Listings */}
      <div className="md:w-3/4">
        <h1 className="text-3xl font-bold mb-8">Makeup Artists</h1>
        {filteredArtists.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No makeup artists found matching your criteria.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtists.map((artist) => (
              <Link to={`/artist/${artist.id}`} key={artist.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={artist.image} alt={artist.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{artist.name}</h2>
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                    <span className="text-gray-600">{artist.city}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    <span>{artist.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-4 h-4 mr-1 text-green-500" />
                    <span>{artist.price.toLocaleString()} PKR</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {artist.type.map((type) => (
                      <span key={type} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
