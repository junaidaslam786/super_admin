import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRefreshTokenMutation } from '../../redux/api/authApi';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [refreshToken, { isLoading }] = useRefreshTokenMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('token');
      if (!token || isTokenExpired(token)) {
        try {
          const response = await refreshToken(token).unwrap();
          localStorage.setItem('token', response.token);
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Error during token refresh:', error);
          localStorage.removeItem('userData');
          localStorage.removeItem('token');
          setIsAuthenticated(false);
          navigate('/login');
        }
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuthStatus();
  }, [refreshToken, navigate]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

const isTokenExpired = (token) => {
  // Implement your token expiration logic here
};

export const useAuth = () => useContext(AuthContext);
