import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function MyEvents() {
  const [events, setEvents] = useState([
    { id: 1, name: 'Tech Conference 2023', date: '2023-09-15', time: '09:00 AM', location: 'Convention Center', organizer: 'TechEvents Inc.' },
    { id: 2, name: 'Networking Mixer', date: '2023-09-10', time: '06:30 PM', location: 'Downtown Lounge', organizer: 'Business Network Group' },
    { id: 3, name: 'Product Launch', date: '2023-09-20', time: '02:00 PM', location: 'Innovation Hub', organizer: 'NewTech Startups' },
    { id: 4, name: 'Workshop: AI in Business', date: '2023-09-05', time: '10:00 AM', location: 'Tech Campus', organizer: 'AI Solutions Ltd.' },
    { id: 5, name: 'Startup Pitch Night', date: '2023-09-25', time: '07:00 PM', location: 'Entrepreneur Center', organizer: 'Venture Capital Partners' },
  ])

  const [sortField, setSortField] = useState('time')
  const [sortDirection, setSortDirection] = useState('asc')

  const sortEvents = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }

    const sortedEvents = [...events].sort((a, b) => {
      if (a[field] < b[field]) return sortDirection === 'asc' ? -1 : 1
      if (a[field] > b[field]) return sortDirection === 'asc' ? 1 : -1
      return 0
    })

    setEvents(sortedEvents)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">My Events</h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <div className="font-semibold text-gray-700">Recent Events</div>
            <div className="flex space-x-4">
              <button
                onClick={() => sortEvents('time')}
                className="flex items-center text-sm text-gray-600 hover:text-gray-800"
              >
                Time
                {sortField === 'time' && (
                  sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />
                )}
              </button>
              <button
                onClick={() => sortEvents('name')}
                className="flex items-center text-sm text-gray-600 hover:text-gray-800"
              >
                Event Name
                {sortField === 'name' && (
                  sortDirection === 'asc' ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />
                )}
              </button>
            </div>
          </div>
          <ul>
            {events.map((event) => (
              <li key={event.id} className="border-b last:border-b-0">
                <div className="p-4 hover:bg-gray-50 transition-colors duration-150">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">{event.name}</h3>
                    <span className="text-sm text-gray-600">{event.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{event.location}</p>
                  <p className="text-sm text-gray-500 mt-1">Organizer: {event.organizer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}