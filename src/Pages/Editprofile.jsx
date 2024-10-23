import React, { useState } from "react";

function App() {
  const [state, setState] = useState("");
  const [otherState, setOtherState] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSaveChanges = (event) => {
    event.preventDefault();
    alert("Changes saved successfully!");
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
        <form onSubmit={handleSaveChanges}>
          <div className="mb-6 flex items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
              {profilePicture ? (
                <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-4xl">
                  ?
                </div>
              )}
            </div>
            <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Upload Picture
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePictureChange}
              />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                className="w-full p-2 border border-gray-300 rounded-md"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="w-full p-2 border border-gray-300 rounded-md"
                defaultValue=""
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              className="w-full p-2 border border-gray-300 rounded-md"
              defaultValue=""
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                name="city"
                className="w-full p-2 border border-gray-300 rounded-md"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <select
                name="state"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">Select a state</option>
                <option value="Sindh">Sindh</option>
                <option value="Punjab">Punjab</option>
                <option value="KPK">KPK</option>
                <option value="Balochistan">Balochistan</option>
                <option value="other">Other</option>
              </select>
              {state === "other" && (
                <input
                  type="text"
                  name="otherState"
                  placeholder="Enter your state"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                  value={otherState}
                  onChange={(e) => setOtherState(e.target.value)}
                />
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="dob_day"
                  placeholder="DD"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue=""
                />
                <input
                  type="text"
                  name="dob_month"
                  placeholder="MM"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue=""
                />
                <input
                  type="text"
                  name="dob_year"
                  placeholder="YYYY"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue=""
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select
                name="gender"
                className="w-full p-2 border border-gray-300 rounded-md"
                defaultValue=""
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ID Card Number</label>
              <input
                type="text"
                name="idCardNumber"
                className="w-full p-2 border border-gray-300 rounded-md"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
              <input
                type="text"
                name="contacts"
                className="w-full p-2 border border-gray-300 rounded-md"
                defaultValue=""
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail Address*</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              defaultValue=""
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;