import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown, AiOutlineRight, AiOutlineUser, AiOutlineBell } from 'react-icons/ai';
import NotificationDropdown from './NotificationDropdown';
import { useAuth } from '../Context/AuthContext';


const Navbar = ({ isLoggedIn, handleLogout }) => {
  const [nav, setNav] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const { LoggedIn } = useAuth();
  const user = JSON.parse(localStorage.getItem('user'));
  const user_type = user?.user_type;

  const handleNav = () => {
    setNav(!nav);
  };


  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen); // Toggle notification dropdown
  };

  const handleSubmenu = (submenu) => {
    setActiveSubmenu(submenu);
  };

  const handleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const handleLogoutClick = () => {
    handleLogout(); // Call the logout function
    // Redirect to the login page or perform other necessary actions
    window.location.href = '/login'; // Redirect to the login route
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
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
                className="relative"
              >
                <button className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  Services
                  <AiOutlineDown className="ml-1" />
                </button>
                {servicesDropdown && (
                  <div className="absolute z-20 mt-1 w-64 bg-gray-900 border rounded shadow-lg right-0">
                    <div className="grid grid-cols-1 gap-4 p-4">
                      <div onMouseEnter={() => handleSubmenu('Venues')} onClick={() => handleSubmenu(null)} className="relative">
                        <h3 className="font-bold text-white cursor-pointer flex items-center">
                          Venues <AiOutlineRight className="ml-1" />
                        </h3>
                        {activeSubmenu === 'Venues' && (
                          <div className="absolute left-full top-0 mt-0 ml-2 w-64 bg-gray-900 border rounded shadow-lg">
                            <ul className="pl-4 py-2">
                              <li className="py-1"><Link to="/career" className="text-gray-300 hover:text-white">Marques</Link></li>
                              <li className="py-1"><Link to="/career" className="text-gray-300 hover:text-white">Wedding Lawns</Link></li>
                              <li className="py-1"><Link to="/career" className="text-gray-300 hover:text-white">Villas</Link></li>
                              <li className="py-1"><Link to="/career" className="text-gray-300 hover:text-white">Farm Houses</Link></li>
                              <li className="py-1"><Link to="/career" className="text-gray-300 hover:text-white">Guest Houses</Link></li>
                              <li className="py-1"><Link to="/career" className="text-gray-300 hover:text-white">Hotels</Link></li>
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
                              <li className="py-1">
                                <Link to="/planning-decor/wedding-planners" className="text-gray-300 hover:text-white">
                                  Wedding Planners
                                </Link>
                              </li>
                              <li className="py-1">
                                <Link to="/planning-decor/decorators" className="text-gray-300 hover:text-white">
                                  Decorators
                                </Link>
                              </li>
                              <li className="py-1">
                                <Link to="/planning-decor/event-resources" className="text-gray-300 hover:text-white">
                                  Event Resources
                                </Link>
                              </li>
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
                              <li className="py-1"><Link to="/FoodServices" className="text-gray-300 hover:text-white">Caterers</Link></li>
                              <li className="py-1"><Link to="/FoodServices" className="text-gray-300 hover:text-white">Bakeries</Link></li>
                              <li className="py-1"><Link to="/FoodServices" className="text-gray-300 hover:text-white">Beverages</Link></li>
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
                              <li className="py-1"><Link to="/MakeupService" className="text-gray-300 hover:text-white">Bridal Makeups</Link></li>
                              <li className="py-1"><Link to="/MakeupService" className="text-gray-300 hover:text-white">Family Makeups</Link></li>
                              <li className="py-1"><Link to="/MakeupService" className="text-gray-300 hover:text-white">Groom Makeups</Link></li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <div onMouseEnter={() => handleSubmenu('Entertainment')} onClick={() => handleSubmenu(null)} className="relative">
                        <h3 className="font-bold text-white cursor-pointer flex items-center">
                          Entertainment <AiOutlineRight className="ml-1" />
                        </h3>
                        {activeSubmenu === 'Entertainment' && (
                          <div className="absolute left-full top-0 mt-0 ml-2 w-64 bg-gray-900 border rounded shadow-lg">
                            <ul className="pl-4 py-2">
                              <li className="py-1"><Link to="/EntertainmentServices" className="text-gray-300 hover:text-white">Live Bands</Link></li>
                              <li className="py-1"><Link to="/EntertainmentServices" className="text-gray-300 hover:text-white">DJs</Link></li>
                              <li className="py-1"><Link to="/EntertainmentServices" className="text-gray-300 hover:text-white">Choreographers</Link></li>
                              <li className="py-1"><Link to="/EntertainmentServices" className="text-gray-300 hover:text-white">Musicians</Link></li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/HireStaff" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Hire Staff</Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/MainApp" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Add Listing</Link>
            {LoggedIn ? (
              <>
                {/* Notification Bell Icon */}
                <div className="relative">
                  <button onClick={toggleNotifications} className="text-gray-300 hover:bg-gray-700 p-2 rounded-md">
                    <AiOutlineBell size={20} />
                  </button>
                  {notificationsOpen && <NotificationDropdown />}
                </div>

                <div className="relative">
                  <button onClick={handleProfileMenu} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <AiOutlineUser className="mr-2" />
                    Profile
                  </button>
                  {profileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-900 border rounded shadow-lg z-30">
                      {user_type === 'CUSTOMER' && (
                        <>
                          <Link to="/CustomerDashboard" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Dashboard</Link>
                          <Link to="/profile" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Edit Profile</Link>
                          <Link to="/FavouritesPage" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Favourites</Link>
                          <Link to="/Setting" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Settings</Link>
                          <button onClick={handleLogoutClick} className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Logout</button>
                        </>
                      )}
                      {user_type === 'STAFF' && (
                        <>
                          <Link to="/staff" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Dashboard</Link>
                          <Link to="/StaffForm" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Edit Profile</Link>
                          <button onClick={handleLogoutClick} className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Logout</button>
                        </>
                      )}
                      {user_type === 'VENUE_PROVIDER' && (
                        <>
                          <Link to="/dashboard" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Dashboard</Link>
                          <Link to="/profile" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Edit Profile</Link>
                          <Link to="/Orderpage" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Orders</Link>
                          <button onClick={handleLogoutClick} className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Logout</button>
                        </>
                      )}
                      {user_type === 'VENDOR' && (
                        <>
                          <Link to="/CustomerDashboard" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Dashboard</Link>
                          <Link to="/profile" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Edit Profile</Link>
                          <Link to="/FavouritesPage" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Favourites</Link>
                          <Link to="/Setting" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Settings</Link>
                          <button onClick={handleLogoutClick} className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700">Logout</button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link to="/Login" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            )}
          </div>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            {nav ? <AiOutlineClose size={25} className="text-white" /> : <AiOutlineMenu size={25} className="text-white" />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
