import { Edit } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CardEditAction({ id }: { id: string }) {
  const navigate = useNavigate();

  return (
    <IconButton
      className="more"
      color="primary"
      sx={{ position: "absolute", display: "none", top: 70, right: 0 }}
      onClick={() => navigate(`EditNote/${id}`)}
    >
      <Tooltip title="Edit note">
        <Edit />
      </Tooltip>
    </IconButton>
  );
}

export default CardEditAction;
