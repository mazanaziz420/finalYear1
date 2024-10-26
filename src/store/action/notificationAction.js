// store/actions/notificationActions.js
import axios from 'axios';
import {
  NEW_NOTIFICATION,
  MARK_AS_READ,
  MARK_ALL_AS_READ,
  FETCH_NOTIFICATIONS,
  FETCH_NOTIFICATIONS_SUCCESS,
  FETCH_NOTIFICATIONS_FAILURE
} from '../types';
import { PRODUCTION_BACKEND_URL, TESTING_BACKEND_URL } from '../urls';

// WebSocket action for receiving new notifications
export const receiveNotification = (notification) => ({
  type: NEW_NOTIFICATION,
  payload: notification
});

// Action to mark a notification as read
export const markNotificationAsRead = (notificationId) => async (dispatch) => {
  try {
    await axios.patch(`${TESTING_BACKEND_URL}/notifications/${notificationId}/read`);
    dispatch({ type: MARK_AS_READ, payload: notificationId });
  } catch (error) {
    console.error("Failed to mark notification as read", error);
  }
};

// Action to mark all notifications as read
export const markAllAsRead = () => async (dispatch) => {
  try {
    await axios.patch(`${TESTING_BACKEND_URL}/notifications/read-all`);
    dispatch({ type: MARK_ALL_AS_READ });
  } catch (error) {
    console.error("Failed to mark all notifications as read", error);
  }
};

// Fetch notifications from the backend
export const fetchNotifications = (token) => async (dispatch) => {
  dispatch({ type: FETCH_NOTIFICATIONS });

  try {
    const response = await axios.get(`${TESTING_BACKEND_URL}/notifications`, {
        headers: {
            Authorization: `Bearer {token}`
        }
    });
    dispatch({ type: FETCH_NOTIFICATIONS_SUCCESS, payload: response.data.notifications });
  } catch (error) {
    dispatch({ type: FETCH_NOTIFICATIONS_FAILURE, payload: error.message });
  }
};
