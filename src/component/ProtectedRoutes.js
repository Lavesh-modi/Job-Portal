import React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';

const useAuth = () => {
  const user = localStorage.getItem('email','password');
  return !!user; // Using double negation to convert to a boolean value
};

const ProtectedRoutes = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;



// Route in the app 