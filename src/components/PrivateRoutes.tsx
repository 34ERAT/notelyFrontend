import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRoutes;
