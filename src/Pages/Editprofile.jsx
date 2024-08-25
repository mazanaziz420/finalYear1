import React from "react";

function App() {
  const handleSaveChanges = (event) => {
    event.preventDefault();
    // Here you can add your logic to save changes, for now, let's just show an alert
    alert("Changes saved successfully!");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-10">
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-serif font-semibold mb-6">My Account</h2>
        <form onSubmit={handleSaveChanges}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                className="mt-1 block w-full p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="mt-1 block w-full p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue=""
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              className="mt-1 block w-full p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              defaultValue=""
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                className="mt-1 block w-full p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="dob_day"
                  placeholder="DD"
                  className="mt-1 block w-full p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  defaultValue=""
                />
                <input
                  type="text"
                  name="dob_month"
                  placeholder="MM"
                  className="mt-1 block w-full p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  defaultValue=""
                />
                <input
                  type="text"
                  name="dob_year"
                  placeholder="YYYY"
                  className="mt-1 block w-full p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  defaultValue=""
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                name="gender"
                className="mt-1 block w-full p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue=""
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Contact</label>
            <input
              type="text"
              name="contacts"
              className="mt-1 block w-full p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              defaultValue=""
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">E-mail Address*</label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              defaultValue=""
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                className="mt-1 block w-full p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Re-enter Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="mt-1 block w-full p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue=""
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Saved Deposit Methods</label>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Bank transfer - PKR</span>
                <span className="ml-2">********7589</span>
                <button className="ml-4 text-indigo-600 hover:text-indigo-900">Edit</button>
              </div>
              <div className="flex items-center justify-between">
                <span>Bank transfer - PKR</span>
                <span className="ml-2">********8260</span>
                <button className="ml-4 text-indigo-600 hover:text-indigo-900">Edit</button>
              </div>
            </div>
            <button type="submit" className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Save Changes</button>
            <button type="button" className="ml-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">Cancel</button>
      
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default App;
