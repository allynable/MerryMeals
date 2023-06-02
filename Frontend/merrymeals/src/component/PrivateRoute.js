import React from 'react';
import {Redirect} from "react-router-dom";

const ProtectedRoute = ({ authenticated, children }) => {
  if (!authenticated) {
    return <Redirect
    to={{
      pathname: '/login',
      state: { from: props.location }
    }}
  />
  }

  return children;
};
  
export default ProtectedRoute;