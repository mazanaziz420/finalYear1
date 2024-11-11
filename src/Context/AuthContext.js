import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [LoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (e.g., by checking localStorage or making an API call)
    const token = localStorage.getItem('token'); // or use any method to get the token
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ LoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
