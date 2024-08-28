/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ClientPrivateRouter = ({ children }) => {
  const location = useLocation();

  const { user } = useSelector((state) => state.user);

  if (!user?._id) {
    return <Navigate to="/auth" state={{ from: { location } }} />;
  }

  return children;
};

export default ClientPrivateRouter;
