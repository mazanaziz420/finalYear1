import React, { useState, useEffect } from 'react';

const VerificationModal = ({ show, onClose, onVerify, onResendCode }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [resendTimer, setResendTimer] = useState(60);

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  return (
    <div className={`fixed z-10 inset-0 ${show ? '' : 'hidden'} bg-black bg-opacity-50`}>
      <div className="flex items-center justify-center min-h-screen text-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Email Verification</h2>
          <input
            type="text"
            placeholder="Enter Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => onVerify(verificationCode)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md"
            >
              Verify
            </button>
            <button
              onClick={() => setResendTimer(60)}
              disabled={resendTimer > 0}
              className={`px-4 py-2 bg-gray-300 rounded-md ${resendTimer > 0 ? 'cursor-not-allowed' : ''}`}
            >
              Resend Code ({resendTimer}s)
            </button>
          </div>
          <button onClick={onClose} className="mt-4 text-gray-600">Close</button>
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
