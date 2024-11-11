import io from 'socket.io-client';
import { PRODUCTION_BACKEND_URL } from '../store/urls';

let socket;

export const initiateSocketConnection = () => {
  socket = io(PRODUCTION_BACKEND_URL, { path: '/notifications' });
  console.log("Connected to WebSocket server");
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};

export const subscribeToNotifications = (callback) => {
  if (!socket) return;
  socket.on('booking_request', (notification) => {
    console.log('New booking request:', notification);
    callback(notification);
  });
  socket.on('booking_status', (notification) => {
    console.log('Booking status updated:', notification);
    callback(notification);
  });
};