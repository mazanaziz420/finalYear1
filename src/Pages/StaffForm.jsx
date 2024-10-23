import React, { useState } from 'react';

const StaffForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    city: '',
    state: '',
    idCardNumber: '',
    experienceYears: '',
    previousEmployers: '',
    relevantSkills: '',
    daysAvailable: [],
    preferredShifts: [],
    noticePeriod: '',
    currentAddress: '',
    preferredWorkLocations: '',
    foodCertifications: '',
    tipsCertification: '',
    firstAidTraining: '',
    eventTypes: '',
    rolesPerformed: '',
    profilePhoto: null,
    resume: null,
    references: '',
    hourlyRate: '',
    specialSkills: '',
    specialRequirements: '',
    additionalComments: '',
    agreement: false,
    privacyConsent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Personal Information */}
        <section>
          <h3 className="text-xl font-medium mb-4">1. Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              placeholder="First Name" 
              className="input-field" 
              required 
            />
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              placeholder="Last Name" 
              className="input-field" 
              required 
            />
            <input 
              type="text" 
              name="phoneNumber" 
              value={formData.phoneNumber} 
              onChange={handleChange} 
              placeholder="Phone Number" 
              className="input-field" 
              required 
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Email Address" 
              className="input-field" 
              required 
            />
            <input 
              type="date" 
              name="dateOfBirth" 
              value={formData.dateOfBirth} 
              onChange={handleChange} 
              className="input-field" 
              placeholder="Date of Birth (optional)" 
            />
            <select 
              name="gender" 
              value={formData.gender} 
              onChange={handleChange} 
              className="input-field"
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input 
              type="text" 
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
              placeholder="City" 
              className="input-field" 
              required 
            />
            <input 
              type="text" 
              name="state" 
              value={formData.state} 
              onChange={handleChange} 
              placeholder="State" 
              className="input-field" 
              required 
            />
            <input 
              type="text" 
              name="idCardNumber" 
              value={formData.idCardNumber} 
              onChange={handleChange} 
              placeholder="ID Card #" 
              className="input-field" 
              required 
            />
          </div>
        </section>

        {/* Location */}
        <section>
          <h3 className="text-xl font-medium mb-4">2. Location</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="currentAddress" 
              value={formData.currentAddress} 
              onChange={handleChange} 
              placeholder="Current Address" 
              className="input-field" 
            />
            <input 
              type="text" 
              name="preferredWorkLocations" 
              value={formData.preferredWorkLocations} 
              onChange={handleChange} 
              placeholder="Preferred Work Locations" 
              className="input-field" 
            />
          </div>
        </section>

        {/* Shift Details */}
        <section>
          <h3 className="text-xl font-medium mb-4">3. Shift Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="daysAvailable" 
              value={formData.daysAvailable} 
              onChange={handleChange} 
              placeholder="Days of the Week Available" 
              className="input-field" 
            />
            <input 
              type="text" 
              name="preferredShifts" 
              value={formData.preferredShifts} 
              onChange={handleChange} 
              placeholder="Preferred Shift Times" 
              className="input-field" 
            />
            <input 
              type="text" 
              name="noticePeriod" 
              value={formData.noticePeriod} 
              onChange={handleChange} 
              placeholder="Notice Period" 
              className="input-field" 
            />
          </div>
        </section>

        {/* Professional Details */}
        <section>
          <h3 className="text-xl font-medium mb-4">4. Professional Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="experienceYears" 
              value={formData.experienceYears} 
              onChange={handleChange} 
              placeholder="Years of Experience" 
              className="input-field" 
            />
            <input 
              type="text" 
              name="previousEmployers" 
              value={formData.previousEmployers} 
              onChange={handleChange} 
              placeholder="Previous Employers" 
              className="input-field" 
            />
            <textarea 
              name="relevantSkills" 
              value={formData.relevantSkills} 
              onChange={handleChange} 
              placeholder="Relevant Skills" 
              className="input-field" 
            />
          </div>
        </section>

        

        {/* Certifications and Training */}
        <section>
          <h3 className="text-xl font-medium mb-4">5. Certifications and Training</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="foodCertifications" 
              value={formData.foodCertifications} 
              onChange={handleChange} 
              placeholder="Food Handling Certifications" 
              className="input-field" 
            />
            <input 
              type="text" 
              name="tipsCertification" 
              value={formData.tipsCertification} 
              onChange={handleChange} 
              placeholder="TIPS Certification" 
              className="input-field" 
            />
            <input 
              type="text" 
              name="firstAidTraining" 
              value={formData.firstAidTraining} 
              onChange={handleChange} 
              placeholder="First Aid Training" 
              className="input-field" 
            />
          </div>
        </section>

        {/* Event Experience */}
        <section>
          <h3 className="text-xl font-medium mb-4">6. Event Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <textarea 
              name="eventTypes" 
              value={formData.eventTypes} 
              onChange={handleChange} 
              placeholder="Types of Events" 
              className="input-field" 
            />
            <textarea 
              name="rolesPerformed" 
              value={formData.rolesPerformed} 
              onChange={handleChange} 
              placeholder="Roles Performed" 
              className="input-field" 
            />
          </div>
        </section>

        {/* Photo/Resume Upload */}
        <section>
          <h3 className="text-xl font-medium mb-4">7. Photo/Resume Upload</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="file" 
              name="profilePhoto" 
              onChange={handleFileChange} 
              className="input-field" 
            />
            <input 
              type="file" 
              name="resume" 
              onChange={handleFileChange} 
              className="input-field" 
            />
          </div>
        </section>

        {/* References */}
        <section>
          <h3 className="text-xl font-medium mb-4">8. References</h3>
          <textarea 
            name="references" 
            value={formData.references} 
            onChange={handleChange} 
            placeholder="Professional References" 
            className="input-field" 
          />
        </section>

        {/* Rate Expectations */}
        <section>
          <h3 className="text-xl font-medium mb-4">9. Rate Expectations</h3>
          <input 
            type="text" 
            name="hourlyRate" 
            value={formData.hourlyRate} 
            onChange={handleChange} 
            placeholder="Hourly Rate or Pay Expectation" 
            className="input-field" 
          />
        </section>

        {/* Additional Notes */}
        <section>
          <h3 className="text-xl font-medium mb-4">10. Additional Notes</h3>
          <textarea 
            name="specialSkills" 
            value={formData.specialSkills} 
            onChange={handleChange} 
            placeholder="Special Skills or Languages Spoken" 
            className="input-field" 
          />
          <textarea 
            name="specialRequirements" 
            value={formData.specialRequirements} 
            onChange={handleChange} 
            placeholder="Any Special Requirements or Requests" 
            className="input-field" 
          />
          <textarea 
            name="additionalComments" 
            value={formData.additionalComments} 
            onChange={handleChange} 
            placeholder="Additional Comments" 
            className="input-field" 
          />
        </section>

        {/* Agreement and Consent */}
        <section>
          <h3 className="text-xl font-medium mb-4">11. Agreement and Consent</h3>
          <div className="flex items-center mb-4">
            <input 
              type="checkbox" 
              name="agreement" 
              checked={formData.agreement} 
              onChange={handleChange} 
              className="mr-2" 
              required 
            />
            <label htmlFor="agreement" className="text-sm">
              I agree to the <a href="#" className="text-blue-600 underline">Terms and Conditions</a>.
            </label>
          </div>
          <div className="flex items-center">
            <input 
              type="checkbox" 
              name="privacyConsent" 
              checked={formData.privacyConsent} 
              onChange={handleChange} 
              className="mr-2" 
              required 
            />
            <label htmlFor="privacyConsent" className="text-sm">
              I consent to the <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
            </label>
          </div>
        </section>

        {/* Submit and Confirmation */}
        <section>
          <h3 className="text-xl font-medium mb-4">12. Submit and Confirmation</h3>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Submit
          </button>
        </section>
      </form>
    </div>
  );
};

export default StaffForm;
