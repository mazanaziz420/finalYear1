import React, { useState } from 'react';

const ResetPasswordModal = ({ show, onClose, onResetPassword }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleResetPassword = () => {
    if (newPassword === confirmNewPassword) {
      onResetPassword(newPassword);
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${show ? '' : 'hidden'} bg-opacity-50`}>
      <div className="flex items-center justify-center min-h-screen p-4 text-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Reset Password</h2>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="w-full px-4 py-2 mt-4 border rounded-md"
          />
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleResetPassword}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md"
            >
              Reset Password
            </button>
          </div>
          <button onClick={onClose} className="mt-4 text-gray-600">Close</button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
