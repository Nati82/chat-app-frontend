import { Tabs, Tab } from "@mui/material";
import {
  PersonPin,
  Chat,
  People,
  GroupAddOutlined,
  PeopleAltOutlined,
  Settings,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const capitallize = { textTransform: "capitalize" };

  return (
    <Tabs value={value} onChange={handleChange} orientation="vertical" variant="scrollable" scrollButtons="auto" sx={{padding: "5rem 0  12.6rem 0"}}>
      <Tab
        icon={<Chat />}
        label="chats"
        component={Link}
        to="/chats"
        sx={capitallize}
      />
      <Tab
        icon={<PeopleAltOutlined />}
        label="friends"
        component={Link}
        to="/friends"
        sx={capitallize}
      />
      <Tab
        icon={<People />}
        label="groups"
        component={Link}
        to="/groups"
        sx={capitallize}
      />
      <Tab
        icon={<GroupAddOutlined />}
        label="users"
        component={Link}
        to="/users"
        sx={capitallize}
      />
      <Tab
        icon={<Settings />}
        label="setting"
        component={Link}
        to="/settings"
        sx={capitallize}
      />
      <Tab
        icon={<PersonPin />}
        label="profile"
        component={Link}
        to="/profile"
        sx={capitallize}
      />
    </Tabs>
  );
};

export default Menubar;
