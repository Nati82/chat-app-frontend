import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Chats from "./Mainbar components/Chats";
import Friends from "./Mainbar components/Friends";
import Groups from "./Mainbar components/Groups";
import Profile from "./Mainbar components/Profile";
import Settings from "./Mainbar components/Settings";
import Users from "./Mainbar components/Users";
import { Root } from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/chats",
        element: <Chats />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/groups",
        element: <Groups />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/users",
        element: <Users />,
        children: [
          {
            path: "/users/user1",
            element: <div>user1</div>
          },
          {
            path: "/users/user2",
            element: <div>user2</div>
          }
        ]
      },
    ],
  },
]);