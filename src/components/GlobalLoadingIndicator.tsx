import { useIsFetching } from "@tanstack/react-query";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles";

function GlobalLoadingIndicator() {
  const isFetching = useIsFetching();
  const theme = useTheme();

  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: theme.zIndex.drawer + 1,
      }}
      open={isFetching > 0}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default GlobalLoadingIndicator;
