// import React from 'react'
// import useAuth from '../../hooks/useAuth'
// import CircularProgress from '@mui/material/CircularProgress';
// import { Navigate, useLocation } from 'react-router-dom';

// const PrivateRoute = ({children,...rest}) => {
//     const {user} = useAuth();
//     let location = useLocation();
//     // if(isLoading) return <CircularProgress />
//     if(user.email) return children;
//     return <Navigate to="login" state={{from : location.pathname}}/>
// }

// export default PrivateRoute

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import useUserContext from "../hooks/useUserContext";

const PublicRoute = () => {
  // const { isAuthenticated, user } = useUserContext();
  const isAuthenticated = true;
  const user = {
    id: 1,
    name: "John Doe",
  };

  // const isAuthenticated = false;
  // const user = null;

  return isAuthenticated && user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PublicRoute;
