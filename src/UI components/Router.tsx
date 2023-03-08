import { createBrowserRouter } from "react-router-dom";
import { userLoader, usersLoader } from "../Components/users";
import UserDetail from "./Mainbar components/Users/UserDetail";
import ErrorPage from "./ErrorPage";
import Chats from "./Mainbar components/Chats";
import Friends from "./Mainbar components/Friends";
import Groups from "./Mainbar components/Groups";
import Profile from "./Mainbar components/Profile";
import Settings from "./Mainbar components/Settings";
import Users from "./Mainbar components/Users";
import { Root } from "./Root";
import SignIn from "./SignIn";

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
        loader: usersLoader,
        children: [
          {
          path: "/users/:id",
          element: <UserDetail />,
          loader: userLoader,
        },
      ]
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn />
  },
]);