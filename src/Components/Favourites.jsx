import { useState } from 'react';
import { Heart, Trash2, Star } from 'lucide-react'

const initialFavorites = [
  { id: 1, name: 'Cozy Cafe', type: 'Restaurant', rating: 4.5, image: '/placeholder.svg?height=200&width=300' },
  { id: 2, name: 'City Park', type: 'Attraction', rating: 4.8, image: '/placeholder.svg?height=200&width=300' },
  { id: 3, name: 'Luxury Hotel', type: 'Accommodation', rating: 4.7, image: '/placeholder.svg?height=200&width=300' },
  { id: 4, name: 'Adventure Tours', type: 'Activity', rating: 4.6, image: '/placeholder.svg?height=200&width=300' },
  { id: 5, name: 'Art Gallery', type: 'Attraction', rating: 4.4, image: '/placeholder.svg?height=200&width=300' },
]

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(initialFavorites)
  const [filter, setFilter] = useState('All')

  const handleRemoveFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id))
  }

  const filteredFavorites = filter === 'All' 
    ? favorites 
    : favorites.filter(fav => fav.type === filter)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <Heart className="w-8 h-8 mr-2 text-red-500" />
        My Favorites
      </h1>

      <div className="mb-6">
        <label htmlFor="filter" className="block text-sm font-medium text-gray-700 mb-2">Filter by type:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="All">All</option>
          <option value="Restaurant">Restaurants</option>
          <option value="Attraction">Attractions</option>
          <option value="Accommodation">Accommodations</option>
          <option value="Activity">Activities</option>
        </select>
      </div>

      {filteredFavorites.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No favorites found. Start adding some!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFavorites.map((favorite) => (
            <div key={favorite.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={favorite.image} alt={favorite.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{favorite.name}</h2>
                <p className="text-gray-600 mb-2">{favorite.type}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span>{favorite.rating.toFixed(1)}</span>
                  </div>
                  <button
                    onClick={() => handleRemoveFavorite(favorite.id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
