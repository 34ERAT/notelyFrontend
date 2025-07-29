import { CheckCircle, Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../config/axiosInstance";
import { useState } from "react";

type Props = {
  id: string;
  onSuccess: () => void;
};
function CardDeleteAction({ id, onSuccess }: Props) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutate: mutateDeleteNote } = useMutation({
    mutationKey: ["deleteNote"],
    mutationFn: async (id: string) => {
      const { data } = await axiosInstance.delete<{ message: string }>(
        `/notes/${id}`,
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
      onClick={() => mutateDeleteNote(id)}
      sx={{ position: "absolute", display: "none", top: 0, right: 0 }}
    >
      <Tooltip title="delete">
        {isSuccess ? <CheckCircle color={"success"} /> : <Delete />}
      </Tooltip>
    </IconButton>
  );
}

export default CardDeleteAction;
