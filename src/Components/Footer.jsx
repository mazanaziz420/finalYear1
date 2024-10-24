import React from 'react';
import { Link } from 'react-router-dom';

const Footer1 = () => {
  return (
    <footer className="bg-gray-900  text-white font-semibold py-10 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-sm">
            <li className="mb-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/about">About Us</Link>
            </li>
            <li className="mb-2">
              <Link to="/Venue">Venue</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="text-sm">
            <li className="mb-2">
              <Link to="/services/EventOrganizer">Vanues</Link>
            </li>
            <li className="mb-2">
              <Link to="/services/EventOrganizer">Planning & Decor</Link>
            </li>
            <li className="mb-2">
              <Link to="/services/EventOrganizer">Makeups</Link>
            </li>
            <li className="mb-2">
              <Link to="/services/EventOrganizer">Food</Link>
            </li>
            <li className="mb-2">
              <Link to="/services/EventOrganizer">Entertainments</Link>
            </li>
            <li className="mb-2">
              <Link to="/services/EventOrganizer">Coverages</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm">
           Riphah International University
          </p>
          <p classname="text-sm">
            I-14/3, Islamabad. 
          </p>
          <p className="text-sm">
            Phone: +93322757328, +93105472579
          </p>
          <p className="text-sm">
            Email: 26404@students.riphah.edu.pk
          </p>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-600">
        <p>© 2024 eveplan.pk</p>
        <div className="space-x-2">
          <a href="#">Terms of Service</a> | 
          <a href="#">Privacy Policy</a> | 
          <a href="#">Refund Policy</a> | 
          <a href="#">Accessibility Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
