import { Navigate, Outlet } from "react-router-dom";
import { useloginStore } from "../store";

function PrivateRoutes() {
  const { accessToken } = useloginStore();
  return accessToken ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRoutes;
