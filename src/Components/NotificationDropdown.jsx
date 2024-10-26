// src/Components/NotificationDropdown.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotifications, markAllAsRead } from '../store/action/notificationAction';

const NotificationDropdown = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.notifications.notifications);
  const token = localStorage.getItem('token');

  useEffect(() => {
    dispatch(fetchNotifications(token));
  });

  const handleMarkAllAsRead = () => {
    dispatch(markAllAsRead());
  };

  return (
    <div className="absolute right-1 top-11 z-10 w-52 bg-white flex flex-col items-center ">
      <button
        onClick={handleMarkAllAsRead}
        className="text-sm text-white w-2/3 bg-blue-600 hover:bg-blue-700 rounded px-3 py-1 mt-2"
      >
        Mark all as read
      </button>
      <ul className="mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto z-10">
        {notifications.length === 0 ? (
          <li className="p-3 text-center text-gray-500">No notifications to display</li>
        ) : (
          notifications.map(notification => (
            <li
              key={notification._id}
              className={`p-3 cursor-pointer ${
                notification.is_read ? 'text-gray-500' : 'font-bold text-black'
              } hover:bg-gray-100`}
            >
              {notification.message}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default NotificationDropdown;
