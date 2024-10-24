'use client'

import { useState } from 'react'
import { Calendar, DollarSign, MapPin, Star, ChevronDown, ChevronUp } from 'lucide-react'

export default function Jobhistory() {
  const [expandedJob, setExpandedJob] = useState(null)

  const jobs = [
    {
      id: 1,
      jobType: 'Wedding Reception',
      venue: 'Seaside Resort',
      date: '2023-06-15',
      earnings: 250,
      feedback: "John was professional and attentive throughout the event. Guests were impressed with his service.",
      rating: 4.8
    },
    {
      id: 2,
      jobType: 'Corporate Conference',
      venue: 'Tech Hub Center',
      date: '2023-05-22',
      earnings: 300,
      feedback: "Excellent work managing the registration desk. John was organized and efficient.",
      rating: 4.9
    },
    {
      id: 3,
      jobType: 'Charity Gala',
      venue: 'Grand Ballroom',
      date: '2023-04-10',
      earnings: 200,
      feedback: "John went above and beyond in helping with last-minute arrangements. A true professional.",
      rating: 5.0
    }
  ]

  const totalEarnings = jobs.reduce((sum, job) => sum + job.earnings, 0)
  const averageRating = (jobs.reduce((sum, job) => sum + job.rating, 0) / jobs.length).toFixed(1)

  const toggleJobExpansion = (id) => {
    setExpandedJob(expandedJob === id ? null : id)
  }

  return (
   
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Job History</h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Earnings Summary</h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Total Earnings</p>
              <p className="text-3xl font-bold text-green-600">${totalEarnings}</p>
            </div>
            <div>
              <p className="text-gray-600">Average Rating</p>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-3xl font-bold text-gray-800">{averageRating}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{job.jobType}</h3>
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {job.date}
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.venue}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-lg font-semibold text-green-600">
                      <DollarSign className="w-5 h-5 mr-1" />
                      {job.earnings}
                    </div>
                    <div className="mt-1 flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="font-medium">{job.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => toggleJobExpansion(job.id)}
                  className="mt-4 flex items-center text-blue-600 hover:text-blue-800"
                >
                  {expandedJob === job.id ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-1" />
                      Hide Feedback
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-1" />
                      View Feedback
                    </>
                  )}
                </button>

                {expandedJob === job.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-md">
                    <h4 className="font-semibold text-gray-700 mb-2">Customer Feedback:</h4>
                    <p className="text-gray-600">{job.feedback}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}