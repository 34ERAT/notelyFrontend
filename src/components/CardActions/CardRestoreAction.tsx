import { CheckCircle, Restore } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../config/axiosInstance";
import { useState } from "react";

type Props = {
  id: string;
  onSuccess: () => void;
};
function CardRestoreAction({ id, onSuccess }: Props) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutate: mutateRestoreNote } = useMutation({
    mutationKey: ["restoreNote"],
    mutationFn: async (id: string) => {
      const { data } = await axiosInstance.patch<{ message: string }>(
        `/notes/restore/${id}`,
      );
      return data;
    },
    onSuccess: () => {
      setIsSuccess(true);
      onSuccess();
      setTimeout(() => setIsSuccess(false), 3000);
    },
  });
  return (
    <IconButton
      className="more"
      color="warning"
      onClick={() => mutateRestoreNote(id)}
      sx={{ position: "absolute", display: "none", top: 0, right: 0 }}
    >
      <Tooltip title="Restore">
        {isSuccess ? <CheckCircle color={"success"} /> : <Restore />}
      </Tooltip>
    </IconButton>
  );
}

export default CardRestoreAction;
