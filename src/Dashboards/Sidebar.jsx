// Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ShoppingCartIcon, UsersIcon, PuzzlePieceIcon, ChartBarIcon} from '@heroicons/react/24/outline';

export default function Sidebar() {
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
        { name: 'Orders', icon: ShoppingCartIcon, path: '/orders' },
        { name: 'Customers', icon: UsersIcon, path: '/customers' },
        { name: 'Reports', icon: ChartBarIcon, path: '/reports' },
        { name: 'Integrations', icon: PuzzlePieceIcon, path: '/integrations' },
    ];

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