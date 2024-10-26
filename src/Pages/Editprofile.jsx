import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { updateUser } from "../store/action/userActions";

function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.user); // Access the loading and error state

  const [profilePicture, setProfilePicture] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    email: "",
    contact: "",
    state: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    gender: "",
    idCardNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const handleSaveChanges = async (event) => {
    event.preventDefault();
    
    // Create full_name by concatenating firstName and lastName
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
  
    // Prepare the data to send to the backend
    const updatedFormData = {
      ...formData,
      full_name: fullName, // Add the full_name field
    };
    const token = localStorage.getItem('token');
  
    // Dispatch the updateUser action with the updatedFormData
    dispatch(updateUser(updatedFormData, token));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
        <form onSubmit={handleSaveChanges}>
          {/* Profile Picture Section */}
          <div className="mb-6 flex items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
              {profilePicture ? (
                <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-4xl">?</div>
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

          {/* Other Fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          
          

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                name="city"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <select
                name="state"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Select a state</option>
                <option value="Sindh">Sindh</option>
                <option value="Punjab">Punjab</option>
                <option value="KPK">KPK</option>
                <option value="Balochistan">Balochistan</option>
                <option value="other">Other</option>
              </select>
              {formData.state === "other" && (
                <input
                  type="text"
                  name="otherState"
                  placeholder="Enter your state"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                  value={formData.state}
                  onChange={handleChange}
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
                  value={formData.dob_day}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="dob_month"
                  placeholder="MM"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.dob_month}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="dob_year"
                  placeholder="YYYY"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.dob_year}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select
                name="gender"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.gender}
                onChange={handleChange}
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
                value={formData.idCardNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
              <input
                type="text"
                name="contacts"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail Address*</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
          {error && <p className="text-red-500">{error}</p>} {/* Show error if exists */}
        </form>
      </div>
    </div>
  );
}

export default App;