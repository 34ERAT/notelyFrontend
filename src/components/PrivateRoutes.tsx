import { Navigate, Outlet } from "react-router-dom";
import { useProfileStore } from "../store";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../config/axiosInstance";
import type { UserProfile } from "../types";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

function PrivateRoutes() {
  const { setProfile } = useProfileStore();
  const [logedIn, setLogedIn] = useState(false);
  const { data, error, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["getProfile"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<UserProfile>("/user");
      return data;
    },
  });
  useEffect(() => {
    if (isSuccess) {
      setProfile(data);
      setLogedIn(true);
    }
  }, [data]);

  if (isLoading) return <Typography>loading please wait .......</Typography>;
  if (isError) {
    console.log(error);
    return <Navigate to={"/login"} />;
  }
  return logedIn && <Outlet />;
}

export default PrivateRoutes;
