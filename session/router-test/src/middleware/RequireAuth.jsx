import { Navigate } from "react-router-dom";

const RequireAuth = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/login" replace={true} />;
};

export default RequireAuth;
