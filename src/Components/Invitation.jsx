'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, DollarSign, Check, X, ChevronDown, ChevronUp } from 'lucide-react'

export default function Invitation() {
  const [invitations, setInvitations] = useState([
    {
      id: 1,
      eventName: 'Corporate Gala Dinner',
      date: '2023-07-15',
      time: '18:00 - 23:00',
      location: 'Grand Ballroom, Luxury Hotel',
      pay: 150,
      description: 'We need experienced wait staff for our annual corporate gala dinner. Duties include serving food and drinks, assisting with setup and cleanup.',
      status: 'pending'
    },
    {
      id: 2,
      eventName: 'Wedding Reception',
      date: '2023-07-22',
      time: '16:00 - 22:00',
      location: 'Seaside Resort',
      pay: 180,
      description: 'Looking for professional staff to help with our wedding reception. Responsibilities include guest management, food service, and general event support.',
      status: 'pending'
    },
    {
      id: 3,
      eventName: 'Tech Conference',
      date: '2023-08-05',
      time: '08:00 - 17:00',
      location: 'City Convention Center',
      pay: 200,
      description: 'Seeking staff for a large tech conference. Duties include registration management, attendee assistance, and session room organization.',
      status: 'pending'
    }
  ])

  const [expandedInvitation, setExpandedInvitation] = useState(null)

  const handleAccept = (id) => {
    setInvitations(invitations.map(inv => 
      inv.id === id ? { ...inv, status: 'accepted' } : inv
    ))
  }

  const handleDecline = (id) => {
    setInvitations(invitations.map(inv => 
      inv.id === id ? { ...inv, status: 'declined' } : inv
    ))
  }

  const toggleExpand = (id) => {
    setExpandedInvitation(expandedInvitation === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Job Offer Invitations</h1>
        
        {invitations.map((invitation) => (
          <div key={invitation.id} className="bg-white shadow-md rounded-lg mb-6 overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{invitation.eventName}</h2>
                  <div className="mt-2 flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {invitation.date}
                  </div>
                  <div className="mt-1 flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {invitation.time}
                  </div>
                  <div className="mt-1 flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {invitation.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-lg font-semibold text-green-600">
                    <DollarSign className="w-5 h-5 mr-1" />
                    {invitation.pay}
                  </div>
                  <div className="mt-2 text-sm text-gray-600">per hour</div>
                </div>
              </div>
              
              <div className="mt-4">
                <button
                  onClick={() => toggleExpand(invitation.id)}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  {expandedInvitation === invitation.id ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-1" />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-1" />
                      View Details
                    </>
                  )}
                </button>
              </div>

              {expandedInvitation === invitation.id && (
                <div className="mt-4 text-sm text-gray-700">
                  <p>{invitation.description}</p>
                </div>
              )}

              {invitation.status === 'pending' && (
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    onClick={() => handleDecline(invitation.id)}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Decline
                  </button>
                  <button
                    onClick={() => handleAccept(invitation.id)}
                    className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Accept
                  </button>
                </div>
              )}

              {invitation.status === 'accepted' && (
                <div className="mt-6 text-center">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-green-800 bg-green-100">
                    Accepted
                  </span>
                </div>
              )}

              {invitation.status === 'declined' && (
                <div className="mt-6 text-center">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-red-800 bg-red-100">
                    Declined
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}

        {invitations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No job offer invitations at the moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}