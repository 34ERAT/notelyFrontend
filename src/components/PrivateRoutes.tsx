import { Navigate, Outlet } from "react-router-dom";
import { useloginStore, useProfileStore } from "../store";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../config/axiosInstance";
import type { UserProfile } from "../types";
import { Typography } from "@mui/material";
import { useEffect } from "react";

function PrivateRoutes() {
  const { accessToken } = useloginStore();
  const { setProfile } = useProfileStore();
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["getProfile"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<UserProfile>("/user");
      return data;
    },
  });
  useEffect(() => {
    if (data) setProfile(data);
    console.log(data);
  }, [data, setProfile, isSuccess]);
  if (isLoading) return <Typography> loading please waiti</Typography>;
  return accessToken ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRoutes;
