import { Box, Stack } from "@mui/material";
import Chatbar from "./Chatbar";
import Mainbar from "./Mainbar";
import Menubar from "./Menubar";

export function Root() {
  return (
    <Box>
      <Stack direction="row">
        <Menubar />
        <Mainbar />
        <Chatbar />
      </Stack>
    </Box>
  );
}
