import { Box, Stack } from "@mui/material";
import Chatbar from "./UI components/Chatbar";
import Mainbar from "./UI components/Mainbar";
import Menubar from "./UI components/Menubar";

function App() {
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

export default App;
