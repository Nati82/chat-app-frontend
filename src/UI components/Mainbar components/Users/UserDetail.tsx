import { Box, Divider } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { userType } from "../../../Components/users";

const UserDetail = () => {
  let user;
  const loaded = useLoaderData() as {user: userType};
  if(loaded && loaded.user) user = loaded.user; 

  return (
    <Box
      flex={6}
      bgcolor="whitesmoke"
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Chatbar
      <Divider />
      {user ? user.id : 'welcome'}
    </Box>
  );
};

export default UserDetail;
