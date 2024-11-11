// 'use client'

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Calendar, Clock, MapPin, DollarSign, Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { getHireRequestsForUser, acceptHireRequest, rejectHireRequest } from '../store/action/hiringStaffActions';

export default function Invitation() {
  const dispatch = useDispatch();
  const { hireREquestsForUser, loading, error } = useSelector((state) => state.hiring);
  const [expandedInvitation, setExpandedInvitation] = useState(null);
  const [isRequestUpdated, setIsRequestUpdated] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all"); // Filter state
  const token = localStorage.getItem('token');
  
  useEffect(() => {
    if (token) {
      dispatch(getHireRequestsForUser(token));
    }

    if (isRequestUpdated) {
      dispatch(getHireRequestsForUser(token));
      setIsRequestUpdated(false); // Reset after re-fetch
    }
  }, [token, dispatch, isRequestUpdated]);

  const handleAccept = (id) => {
    dispatch(acceptHireRequest(id, token));
    setIsRequestUpdated(true);
  };

  const handleDecline = (id) => {
    dispatch(rejectHireRequest(id, token));
    setIsRequestUpdated(true);
  };

  const toggleExpand = (id) => {
    setExpandedInvitation(expandedInvitation === id ? null : id);
  };

  // Sort and filter requests
  const sortedAndFilteredRequests = hireREquestsForUser
    ? hireREquestsForUser
        .filter(invitation => filterStatus === "all" || invitation.status === filterStatus)
        .sort((a, b) => {
          if (a.status === "pending") return -1;
          if (b.status === "pending") return 1;
          if (a.status === "accepted") return -1;
          if (b.status === "accepted") return 1;
          return 0;
        })
    : [];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Offer Invitations</h1>
        
        {/* Dropdown for filtering */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter Requests:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {loading && <div>Loading...</div>}

        {error && (
          <div className="text-red-500 text-center mb-4">
            {error}
          </div>
        )}

        {sortedAndFilteredRequests.length > 0 ? (
          sortedAndFilteredRequests.map((invitation) => (
            <div key={invitation.hire_request_id} className="bg-white shadow-md rounded-lg mb-6 overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{invitation.eventType}</h2>
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {invitation.requested_dates[0]} - {invitation.requested_dates[invitation.requested_dates.length - 1]}
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {invitation.time}
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {invitation.venueLocation}, {invitation.city}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-lg font-semibold text-green-600">
                      <DollarSign className="w-5 h-5 mr-1" />
                      {invitation.wageOffered}
                    </div>
                    <div className="mt-2 text-sm text-gray-600">per hour</div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <button
                    onClick={() => toggleExpand(invitation.hire_request_id)}
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    {expandedInvitation === invitation.hire_request_id ? (
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

                {expandedInvitation === invitation.hire_request_id && (
                  <div className="mt-4 text-sm text-gray-700">
                    <p>{invitation.description}</p>
                  </div>
                )}

                {invitation.status === 'pending' && (
                  <div className="mt-6 flex justify-end space-x-4">
                    <button
                      onClick={() => handleDecline(invitation.hire_request_id)}
                      className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Decline
                    </button>
                    <button
                      onClick={() => handleAccept(invitation.hire_request_id)}
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

                {invitation.status === 'rejected' && (
                  <div className="mt-6 text-center">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold text-red-800 bg-red-100">
                      Rejected
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No job offer invitations at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
