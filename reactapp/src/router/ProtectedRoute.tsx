import { Navigate } from "react-router-dom";

const token = localStorage.getItem("token");

const isAuthenticated = ({
  redirectPath = "/",
  children,
}: any) => {
  if (!token) {
    return <Navigate to={redirectPath} />;
  }

  return children;
};


export default isAuthenticated;