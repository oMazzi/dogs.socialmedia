import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ props }) => {
  const { data } = useSelector((state) => state.user);

  if (data) return <Route path="/myaccount" {...props} />;
  else return <Route path="/login" />;
};

export default ProtectedRoute;
