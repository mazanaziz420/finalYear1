import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          {/* Replace with your image */}
         
          <h1 className="text-5xl font-bold mb-4">Your one-stop shop!</h1> <br></br>
          
          <button className="bg-red-500 px-8 py-3 text-white rounded-lg">Contact Us</button>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Event Organizers</h2>
            <img src="/../images/about05.jpg" alt="Image 1" /><br></br>
            <p>Team that provides the best planning and organizing events</p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Venue Providers</h2>
            <img src="/../images/about01.jpg" alt="Image 1" /><br></br>
            <p>Business holders providing luxurious locations with great services</p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Expertise Staff</h2>
            <img src="/../images/about03.jpg" alt="Image 1" /><br></br>
            <p>Skilled waiters to enhance your event services</p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Local Vendors Services</h2>
            <img src="/../images/about04.jpg" alt="Image 1" /><br></br>
            <p>Top-notch services to delight your guests and complete your privatized events.</p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Entertainment Providers</h2>
            <img src="/../images/about06.jpg" alt="Image 1" /><br></br>
            <p>Professional entertainers to keep your guests engaged</p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-5 py-12 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-1 items-center">
          
          <img src="/images/about1.jpg" alt="About Us" className="w-auto h-auto rounded-lg" />
          <div>
            <h2 className="text-5xl font-bold mb-4">Join us and plan your events</h2> <br></br>
            <p>We aim to give you a centralized platform where all management related and services are at your fingertips.</p><br></br>
         
            <button className="bg-red-500 px-8 py-3 text-white rounded-lg">Get Started</button>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Booking Services</h3>
            <p>Managing booking services for booking the service providers easily.</p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Listing Services</h3>
            <p>Platform to showcase services for reaching customers</p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Staff Management</h3>
            <p>Offering expertise staff to enhance the event services.</p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Profile Management</h3>
            <p>Join us and manage your profile smoothly for management of account</p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Payment Gateway</h3>
            <p>Managing secure payment gateway for completing the booking procedure.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Don't Hesitate To Contact Us For Better Information And Services</h2>
          <p className="mt-4">Fill out the form below to get in touch with our team.</p>
        </div>
        <div className="flex justify-center">
          <form className="w-full max-w-lg p-8 bg-gray-100 rounded-lg">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input className="w-full p-3 rounded-lg" type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input className="w-full p-3 rounded-lg" type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea className="w-full p-3 rounded-lg" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button className="w-full bg-red-500 text-white p-3 rounded-lg">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
