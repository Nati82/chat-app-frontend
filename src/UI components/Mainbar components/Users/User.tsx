import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { userType } from "../../../Components/users";

export default function User({ user }: { user: userType }) {
  return (
    <>
      <ListItem
        alignItems="flex-start"
        component={Link}
        to={`/users/${user.id}`}
        sx={{marginBottom: "2px"}}
      >
        <ListItemAvatar>
          <Avatar
            alt={user.username}
            src={user.profile[user.profile.length - 1].profile}
          />
        </ListItemAvatar>
        <ListItemText
          primary={user.username}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {user.firstname} {user.lastname}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />{" "}
    </>
  );
}
