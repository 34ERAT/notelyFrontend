import { Navigate, Outlet } from "react-router-dom";
import { useloginStore, useProfileStore } from "../store";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../config/axiosInstance";
import type { UserProfile } from "../types";
import { useEffect } from "react";

function PrivateRoutes() {
  const { accessToken } = useloginStore();
  const { setProfile } = useProfileStore();
  const { data, isSuccess } = useQuery({
    queryKey: ["getProfile"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<UserProfile>("/user");
      return data;
    },
  });
  useEffect(() => {
    if (data) setProfile(data);
  }, [data, setProfile, isSuccess]);
  return accessToken ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRoutes;
