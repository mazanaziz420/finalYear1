import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputField = ({ id, name, type, placeholder, value, onChange, className }) => (
  <div className='mb-4'>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{placeholder}</label>
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
    />
  </div>
);

const SigninSignup = ({ handleLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup forms
  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    handleLogin();
    navigate('/'); // Redirect to home or any other page after login
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log('Signing up:', { firstName, lastName, email, password });
    navigate('/'); // Redirect to home or any other page after signup
  };

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup forms
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-4">
          <img
            src="/logo.png"
            
            className="h-14 w-auto mb-2"
            style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
          />
          <h1 className="text-3xl font-extrabold text-gray-900">EvePlan.pk</h1>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {isLogin ? 'Welcome to EvePlan! 👋' : 'Create an Account'}
        </h2>
        <p className="text-center text-gray-600">
          {isLogin ? 'Please sign-in to your account and start the planning' : 'Sign up and start your adventure with EvePlan'}
        </p>
        <form className="space-y-6" onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}>
          <div>
            <input type="hidden" name="remember" value="true" />
            {!isLogin && (
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <InputField id="firstName" name="firstName" type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="w-1/2">
                  <InputField id="lastName" name="lastName" type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>
            )}
            <InputField id="email-address" name="email" type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField id="password" name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {!isLogin && (
              <InputField id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            )}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Select Your Role</label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="flex items-center">
                    <input id="customer" name="role" type="radio" value="Customer" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                    <label htmlFor="customer" className="ml-3 text-sm font-medium text-gray-700">Customer</label>
                  </div>
                  <div className="flex items-center">
                    <input id="venue-provider" name="role" type="radio" value="Venue Provider" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                    <label htmlFor="venue-provider" className="ml-3 text-sm font-medium text-gray-700">Venue Provider</label>
                  </div>
                  <div className="flex items-center">
                    <input id="vendor" name="role" type="radio" value="Vendor" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                    <label htmlFor="vendor" className="ml-3 text-sm font-medium text-gray-700">Vendor</label>
                  </div>
                  <div className="flex items-center">
                    <input id="staff" name="role" type="radio" value="Staff" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                    <label htmlFor="staff" className="ml-3 text-sm font-medium text-gray-700">Staff</label>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLogin ? 'Log In' : 'Sign Up'}
            </button>
          </div>
        </form>
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
      </div>
    </div>
  );
};

export default SigninSignup;
