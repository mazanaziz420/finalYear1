import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown, AiOutlineRight } from 'react-icons/ai';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const [nav, setNav] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const openDropdown = () => {
    setServicesDropdown(true);
  };

  const closeDropdown = () => {
    setServicesDropdown(false);
    setActiveSubmenu(null);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
  };

  const handleSubmenu = (submenu) => {
    setActiveSubmenu(submenu);
  };

  return (
    <nav className="bg-gray-900 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[10vh]">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="font-bold text-white">EvePlan.Pk</h1>
            </div>
            <div className="hidden md:flex ml-80 items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <div
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                className="relative"
              >
                <button className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  Services
                  <AiOutlineDown className="ml-1" />
                </button>
                {servicesDropdown && (
                  <div className="absolute z-10 mt-1 w-64 bg-gray-900 border rounded shadow-lg right-0">
                    <div className="grid grid-cols-1 gap-4 p-4">
                      <div onMouseEnter={() => handleSubmenu('Venues')} onClick={() => handleSubmenu(null)} className="relative">
                        <h3 className="font-bold text-white cursor-pointer flex items-center">
                          Venues <AiOutlineRight className="ml-1" />
                        </h3>
                        {activeSubmenu === 'Venues' && (
                          <div className="absolute left-full top-0 mt-0 ml-2 w-64 bg-gray-900 border rounded shadow-lg">
                            <ul className="pl-4 py-2">
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Marques</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Wedding Lawns</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Villas</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Farm Houses</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Guest Houses</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Hotels</Link></li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <div onMouseEnter={() => handleSubmenu('Planning & Decor')} onClick={() => handleSubmenu(null)} className="relative">
                        <h3 className="font-bold text-white cursor-pointer flex items-center">
                          Planning & Decor <AiOutlineRight className="ml-1" />
                        </h3>
                        {activeSubmenu === 'Planning & Decor' && (
                          <div className="absolute left-full top-0 mt-0 ml-2 w-64 bg-gray-900 border rounded shadow-lg">
                            <ul className="pl-4 py-2">
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Wedding Planners</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Decorators</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Event Resources</Link></li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <div onMouseEnter={() => handleSubmenu('Makeup')} onClick={() => handleSubmenu(null)} className="relative">
                        <h3 className="font-bold text-white cursor-pointer flex items-center">
                          Makeup <AiOutlineRight className="ml-1" />
                        </h3>
                        {activeSubmenu === 'Makeup' && (
                          <div className="absolute left-full top-0 mt-0 ml-2 w-64 bg-gray-900 border rounded shadow-lg">
                            <ul className="pl-4 py-2">
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Bridal Makeups</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Family Makeups</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Groom Makeups</Link></li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <div onMouseEnter={() => handleSubmenu('Food')} onClick={() => handleSubmenu(null)} className="relative">
                        <h3 className="font-bold text-white cursor-pointer flex items-center">
                          Food <AiOutlineRight className="ml-1" />
                        </h3>
                        {activeSubmenu === 'Food' && (
                          <div className="absolute left-full top-0 mt-0 ml-2 w-64 bg-gray-900 border rounded shadow-lg">
                            <ul className="pl-4 py-2">
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Caterers</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Bakeries</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Beverages</Link></li>
                            </ul>
                          </div>
                        )}
                      </div>
                      {/* <div onMouseEnter={() => handleSubmenu('Photography')} onClick={() => handleSubmenu(null)} className="relative">
                        <h3 className="font-bold text-white cursor-pointer flex items-center">
                          Photography <AiOutlineRight className="ml-1" />
                        </h3>
                        {activeSubmenu === 'Photography' && (
                          <div className="absolute left-full top-0 mt-0 ml-2 w-64 bg-gray-900 border rounded shadow-lg">
                            <ul className="pl-4 py-2">
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Photographers</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Videographers</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Drone Coverage</Link></li>
                            </ul>
                          </div>
                        )}
                      </div> */}
                      <div onMouseEnter={() => handleSubmenu('Entertainment')} onClick={() => handleSubmenu(null)} className="relative">
                        <h3 className="font-bold text-white cursor-pointer flex items-center">
                          Entertainment <AiOutlineRight className="ml-1" />
                        </h3>
                        {activeSubmenu === 'Entertainment' && (
                          <div className="absolute left-full top-0 mt-0 ml-2 w-64 bg-gray-900 border rounded shadow-lg">
                            <ul className="pl-4 py-2">
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Bands</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">DJs</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Choreographers</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Musicians</Link></li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <div onMouseEnter={() => handleSubmenu('Coverages')} onClick={() => handleSubmenu(null)} className="relative">
                        <h3 className="font-bold text-white cursor-pointer flex items-center">
                          Coverages <AiOutlineRight className="ml-1" />
                        </h3>
                        {activeSubmenu === 'Coverages' && (
                          <div className="absolute left-full top-0 mt-0 ml-2 w-64 bg-gray-900 border rounded shadow-lg">
                            <ul className="pl-4 py-2">
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Photographers</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Audio/Video</Link></li>
                              <li className="py-1"><Link to="/Career" className="text-gray-300 hover:text-white">Videographers</Link></li>
                              </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/contact" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Hire Staff</Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/MainApp" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Add Listing</Link>
            {isLoggedIn ? (
              <>
                <Link to="/CustomerDashboard" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                <button onClick={handleLogout} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Logout</button>
              </>
            ) : (
              <Link to="/login" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            )}
            <button onClick={handleNav} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white md:hidden">
              <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {nav && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={handleNav} className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900">Home</Link>
            <Link to="/about" onClick={handleNav} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">About</Link>
            <div
              onClick={toggleServicesDropdown}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Services
            </div>
            {servicesDropdown && (
              <div className="pl-4">
                <Link to="/service1" onClick={handleNav} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Service 1</Link>
                <Link to="/service2" onClick={handleNav} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Service 2</Link>
                <Link to="/service3" onClick={handleNav} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Service 3</Link>
              </div>
            )}
            <Link to="/clients" onClick={handleNav} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Clients</Link>
            <Link to="/career" onClick={handleNav} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Career</Link>
            <Link to="/enquiry" onClick={handleNav} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Enquiry</Link>
            <Link to="/contact" onClick={handleNav} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Contact</Link>
            <Link to="/listing" onClick={handleNav} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Listing</Link>
            <Link to="/SigninSignup" onClick={handleNav} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">SigninSignup</Link>
            {isLoggedIn && (
              <>
                <Link to="/dashboard" onClick={handleNav} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Dashboard</Link>
                <button onClick={() => { handleNav(); handleLogout(); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
