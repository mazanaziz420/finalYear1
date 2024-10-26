import React, { useState } from 'react';
import { ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from "react-redux"; 
import { deleteUser, verifyPassword } from "../store/action/userActions";

const DeleteAccount = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.user);
  const passwordVerificationError = useSelector(state => state.user.verify_pass_error);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [password, setPassword] = useState('');
  const [reason, setReason] = useState('');
  const [otherReason, setOtherReason] = useState('');

  const handleDeleteAccount = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    await dispatch(verifyPassword(token, password));
    
    if (passwordVerificationError) {
      // Show error and return early if password verification fails
      return;
    }

    dispatch(deleteUser(token));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div>
          <XCircleIcon className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Delete Account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We're sorry to see you go. Please be aware that this action is irreversible.
          </p>
        </div>
        <div className="rounded-md bg-yellow-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Deleting your account will permanently remove all your data, including your profile, bookings, and preferences. This action cannot be undone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleDeleteAccount}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                Why are you deleting your account?
              </label>
              <select
                id="reason"
                name="reason"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              >
                <option value="">Select a reason</option>
                <option value="Not using the service">Not using the service</option>
                <option value="Found a better alternative">Found a better alternative</option>
                <option value="Privacy concerns">Privacy concerns</option>
                <option value="Too many emails">Too many emails</option>
                <option value="Difficult to use">Difficult to use</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {reason === 'Other' && (
              <div className="mt-2">
                <label htmlFor="otherReason" className="block text-sm font-medium text-gray-700 mb-2">
                  Please specify:
                </label>
                <textarea
                  id="otherReason"
                  name="otherReason"
                  rows={3}
                  className="shadow-sm focus:ring-red-500 focus:border-red-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={otherReason}
                  onChange={(e) => setOtherReason(e.target.value)}
                  required
                ></textarea>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm your password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Enter your password to confirm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <input
              id="confirm-delete"
              name="confirm-delete"
              type="checkbox"
              required
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              checked={confirmDelete}
              onChange={(e) => setConfirmDelete(e.target.checked)}
            />
            <label htmlFor="confirm-delete" className="ml-2 block text-sm text-gray-900">
              I understand that this action is irreversible and I want to delete my account
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              disabled={!confirmDelete || !password || !reason || (reason === 'Other' && !otherReason) || loading}
            >
              {loading ? "Deleting..." : "Delete My Account"}
            </button>
            {error && <p className="text-red-500">{error}</p>} 
          </div>
        </form>
        <div className="text-center">
          <a href="/settings" className="font-medium text-indigo-600 hover:text-indigo-500">
            Cancel and go back to settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;