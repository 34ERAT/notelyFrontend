import { Box, CircularProgress, Fab } from "@mui/material";
import { green } from "@mui/material/colors";
import type { ReactNode } from "react";

type Props = {
  isloading: boolean;
  isSuccess: boolean;
  successIcon: ReactNode;
  icon: ReactNode;
  onClick: () => void;
  disabled: boolean;
  size?: "small" | "medium";
};
function ActionButton({
  isloading,
  successIcon,
  isSuccess,
  icon,
  onClick,
  size,
  disabled,
}: Props) {
  const buttonSx = {
    ...(isSuccess && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Fab
        sx={buttonSx}
        size={size || "large"}
        onClick={onClick}
        color="primary"
        disabled={disabled}
      >
        {isSuccess ? successIcon : icon}
      </Fab>
      {isloading && (
        <CircularProgress
          size={size == "small" ? 52 : 68}
          sx={{
            color: green[500],
            position: "absolute",
            top: -6,
            left: -6,
          }}
        />
      )}
    </Box>
  );
}

export default ActionButton;
