import { ReactFragment, ReactNode } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  redirectPath?: string;
  children: ReactNode | number | JSX.Element | JSX.Element[] | string | ReactFragment | null | undefined;
};

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