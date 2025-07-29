import { Edit } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useEditorStore } from "../../store";

function CardEditAction({ id }: { id: string }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setNote } = useEditorStore();
  return (
    <IconButton
      className="more"
      color="primary"
      sx={{ position: "absolute", display: "none", top: 70, right: 0 }}
      onClick={() => {
        queryClient.invalidateQueries({ queryKey: ["fetchNote"] });
        setNote({ title: "", content: "", synopsis: "" });
        navigate(`EditNote/${id}`);
      }}
    >
      <Tooltip title="Edit note">
        <Edit />
      </Tooltip>
    </IconButton>
  );
}

export default CardEditAction;
