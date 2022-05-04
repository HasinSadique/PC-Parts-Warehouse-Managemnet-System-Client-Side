import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";

import { Navigate, useLocation } from "react-router";

const RequireAuth = (props, { children }) => {
  const [user] = useAuthState(getAuth(app));
  // console.log("user: ", useAuthState(getAuth(app)));

  const location = useLocation();
  if (!user) {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default RequireAuth;
