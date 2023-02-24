import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Mainbar = () => {
  return (
    <Box flex={3} bgcolor="gray">
      <Outlet />
    </Box>
  );
};

export default Mainbar;
