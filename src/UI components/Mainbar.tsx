import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Mainbar = () => {
  return (
    <Box flex={2} bgcolor="whitesmoke">
      <Outlet />
    </Box>
  );
};

export default Mainbar;
