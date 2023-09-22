// import React from 'react';
// import { Navigate, Outlet, Route } from 'react-router-dom';

// const useAuth = () => {
//   const user = localStorage.getItem('email','password');
//   return !!user; // Using double negation to convert to a boolean value
// };

// const ProtectedRoutes = () => {
//   const auth = useAuth();

//   return auth ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default ProtectedRoutes;

// Route in the app

import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";

const useAuth = () => {
  const userEmail = getCookie("userid");
  // const userPassword = getCookie('password');

  // return !!userEmail && !!userPassword;
  return !!userEmail;
};

function getCookie(name) {
  console.log("called function");
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name))
    ?.split("=")[1];
  console.log(cookieValue, "cookievalue");
  return cookieValue;
}

const ProtectedRoutes = () => {
  const auth = useAuth();
  console.log("auth>>>");
  return auth ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
