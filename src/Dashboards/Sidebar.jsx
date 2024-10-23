import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ShoppingCartIcon, UsersIcon, PlusIcon, PuzzlePieceIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Sidebar({ activeSection }) {  // Accept activeSection as a prop
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
        { name: 'My Profile', icon: UsersIcon, path: '/profile' },
        { name: 'My Listing', icon: PlusIcon, path: '/MyListing' },
        { name: 'Orders', icon: ShoppingCartIcon, path: '/Orderpage' },
        { name: 'Recents', icon: ChartBarIcon, path: '/Recents' },
    ];

    // Conditionally add the Staff item if the active section is 'Venues'
    if (activeSection === 'Venues') {
        menuItems.push({ name: 'Staff', icon: ChartBarIcon, path: '/MyStaff' });
    }

    return (
        <div className="bg-gray-800 text-white w-64 h-screen">
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className={`p-4 ${location.pathname === item.path ? 'bg-gray-900' : ''}`}>
                        <Link to={item.path} className="flex items-center">
                            <item.icon className="h-6 w-6 mr-2" />
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
