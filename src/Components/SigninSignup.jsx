import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, signup, getVerificationCode, verifyCode, resetPassword } from '../store/action/authActions';
import VerificationModal from './VerificationModal';
import ResetPasswordModal from './ResetPasswordModal';
import InputField from './InputField';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const InputField = ({ id, name, type, placeholder, value, onChange, className }) => (
//   <div className='mb-4'>
//     <label htmlFor={id} className="block text-sm font-medium text-gray-700">{placeholder}</label>
//     <input
//       id={id}
//       name={name}
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className={`block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
//     />
//   </div>
// );

const SigninSignup = ({ handleLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('CUSTOMER');
  const [isLogin, setIsLogin] = useState(true);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateFields = () => {
    const newErrors = {};
    
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    
    if (!isLogin) {
      if (!firstName) newErrors.firstName = 'First Name is required';
      if (!lastName) newErrors.lastName = 'Last Name is required';
      if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
      
      if (password !== confirmPassword) {
        newErrors.passwordMismatch = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (validateFields()) {
      const result = await dispatch(login(email, password));
      if (result.success) {
        toast.success("Login successful!");
        navigate('/'); // Redirect after login only on success
      } else {
        toast.error(result.message || "Login failed. Please try again.");
      }
    }
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    if (validateFields()) {
      if (errors.passwordMismatch) {
        toast.error("Passwords don't match");
        return;
      }
      const userData = {
        email,
        password,
        full_name: `${firstName} ${lastName}`,
        username: email.split('@')[0],
        user_type: selectedRole
      };
      dispatch(signup(userData));
      setIsVerificationModalOpen(true);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  const handleForgotPassword = () => {
    if (email) {
      setIsVerificationModalOpen(true);
      dispatch(getVerificationCode(email));
    } else {
      setErrors({ email: true });
      toast.error("Please enter your email address");
    }
  };

  const handleVerification = async (code) => {
    const success = await dispatch(verifyCode(email, code));
    if (success) {
      if (isLogin) {
        // If already on the login screen, open the reset password modal
        setIsVerificationModalOpen(false);
        setIsResetPasswordModalOpen(true);
      } else {
        // If on the signup screen, navigate to login page
        setIsVerificationModalOpen(false);
        toast.dismiss();
        setIsLogin(true);
        toast.success('Email verified successfully! You can now log in.');
        navigate('/login'); // Ensure that '/login' is the correct route for your login page
      }
    } else {
      toast.error('Verification failed. Please check the code and try again.');
    }
  };

  const handleResetPassword = (newPassword) => {
    dispatch(resetPassword(email, newPassword));
    setIsResetPasswordModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className={`w-full max-w-md p-8 space-y-8 ${isLogin ? '' : 'm-4'} bg-white rounded-lg shadow-lg`}>
        <form className={`${isLogin ? 'space-y-6' : 'space-y-4'}`} onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}>
          {!isLogin && (
            <div className=' flex gap-4'>
              <InputField
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                isError={errors.firstName}
              />
              <InputField
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                isError={errors.lastName}
              />
            </div>
          )}
          <InputField
            id="email-address"
            name="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isError={errors.email}
          />
          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isError={errors.password || errors.passwordMismatch}
          />
          {!isLogin && (
            <InputField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              isError={errors.confirmPassword || errors.passwordMismatch}
            />
          )}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Your Role</label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex items-center">
                  <input
                    id="customer"
                    name="role"
                    type="radio"
                    value="CUSTOMER"
                    checked={selectedRole === 'CUSTOMER'}
                    onChange={() => setSelectedRole('CUSTOMER')}
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label htmlFor="customer" className="ml-3 text-sm font-medium text-gray-700">Customer</label>
                </div>
                <div className="flex items-center">
                  <input
                    id="venue-provider"
                    name="role"
                    type="radio"
                    value="VENUE_PROVIDER"
                    checked={selectedRole === 'VENUE_PROVIDER'}
                    onChange={() => setSelectedRole('VENUE_PROVIDER')}
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label htmlFor="venue-provider" className="ml-3 text-sm font-medium text-gray-700">Venue Provider</label>
                </div>
                <div className="flex items-center">
                  <input
                    id="vendor"
                    name="role"
                    type="radio"
                    value="VENDOR"
                    checked={selectedRole === 'VENDOR'}
                    onChange={() => setSelectedRole('VENDOR')}
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label htmlFor="vendor" className="ml-3 text-sm font-medium text-gray-700">Vendor</label>
                </div>
                <div className="flex items-center">
                  <input
                    id="staff"
                    name="role"
                    type="radio"
                    value="STAFF"
                    checked={selectedRole === 'STAFF'}
                    onChange={() => setSelectedRole('STAFF')}
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label htmlFor="staff" className="ml-3 text-sm font-medium text-gray-700">Staff</label>
                </div>
              </div>
            </div>
          )}
          <div>
            <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">
              {isLogin ? 'Log In' : 'Sign Up'}
            </button>
          </div>
        </form>
        {isLogin && (
          <div className="mt-4 text-center">
            <button onClick={handleForgotPassword} className="text-sm text-indigo-600 hover:text-indigo-500">
              Forgot Password?
            </button>
          </div>
        )}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-600">
            {isLogin ? (
              <>
                New on our platform?{' '}
                <button onClick={toggleForm} className="font-medium text-indigo-600 hover:text-indigo-500">
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already a member?{' '}
                <button onClick={toggleForm} className="font-medium text-indigo-600 hover:text-indigo-500">
                  Log in
                </button>
              </>
            )}
          </div>
        </div>
        {!isLogin && (
          <div className="relative flex items-center justify-center mt-6">
            <span className="absolute px-2 text-gray-500 bg-white">or</span>
            <div className="w-full border-t border-gray-300"></div>
          </div>
        )}
        <VerificationModal
          show={isVerificationModalOpen}
          onClose={() => setIsVerificationModalOpen(false)}
          onVerify={handleVerification}
          onResendCode={() => dispatch(getVerificationCode(email))}
        />
        <ResetPasswordModal
          show={isResetPasswordModalOpen}
          onClose={() => setIsResetPasswordModalOpen(false)}
          onResetPassword={handleResetPassword}
        />
      </div>
    </div>
  );
};

export default SigninSignup;
