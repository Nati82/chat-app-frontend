import { Box, Divider, Stack, Typography } from "@mui/material";
import List from "@mui/material/List";
import { Outlet, useLoaderData } from "react-router-dom";
import { userType } from "../../Components/users";
import SearchBar from "./Users/SearchBar";
import User from "./Users/User";

const Users = () => {
  const { users } = useLoaderData() as { users: userType[] };

  return (
    <Box sx={{ display: "flex", direction: "row" }}>
      <Stack flex={1} direction="column">
        <Typography variant="h3" gutterBottom>
          Users
        </Typography>
        <Divider />
        <SearchBar />
        <Divider />
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {users.map((u) => (
            <User user={u} key={u.id} />
          ))}
        </List>
      </Stack>
      <Box flex={3}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Users;
