import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../config/axiosInstance";

type Props = {
  id: string;
  onSuccess?: () => void;
};
function CardDeleteAction({ id, onSuccess }: Props) {
  const { mutate: mutateDeleteNote } = useMutation({
    mutationKey: ["deleteNote"],
    mutationFn: async (id: string) => {
      const { data } = await axiosInstance.delete<{ message: string }>(
        `/notes/${id}`,
      );
      return data;
    },
    onSuccess: onSuccess,
  });

  return (
    <IconButton
      className="more"
      color="warning"
      onClick={() => mutateDeleteNote(id)}
      sx={{ position: "absolute", display: "none", top: 0, right: 0 }}
    >
      <Tooltip title="delete">
        <Delete />
      </Tooltip>
    </IconButton>
  );
}

export default CardDeleteAction;
