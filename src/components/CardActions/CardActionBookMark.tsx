import { Bookmark, CheckCircle } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { green } from "@mui/material/colors";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../config/axiosInstance";
import { useState } from "react";
type Props = {
  id: string;
  bookMarked: boolean;
  onSuccess: () => void;
};
function CardActionBookMark({ id, onSuccess, bookMarked }: Props) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutate } = useMutation({
    mutationKey: ["bookMarkNote"],
    mutationFn: async (id: string) => {
      const { data } = await axiosInstance.patch(`/notes/bookmarks/${id}`, {
        BookMarked: !bookMarked,
      });
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
      onClick={() => mutate(id)}
      sx={{
        color: bookMarked ? green[600] : "primary.main",
        position: "absolute",
        display: "none",
        top: 40,
        right: 0,
      }}
    >
      <Tooltip title="Bookmark">
        {isSuccess ? <CheckCircle /> : <Bookmark />}
      </Tooltip>
    </IconButton>
  );
}

export default CardActionBookMark;
