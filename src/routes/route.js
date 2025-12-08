import { lazy } from "react";
import { allPaths } from "./paths";
import Explore from "../pages/Explore";
const Feeds = lazy(() => import("../shared/Feeds"));
const Notifications = lazy(() => import("../pages/Notifications"));
const Profiles = lazy(() => import("../pages/Profiles"));
const Messages = lazy(() => import("../pages/Messages"));
// const SignUp = lazy(() => import("../pages/SignUp"));

export const allRoutes = [
  {
    path: allPaths.feeds,
    element: Feeds,
  },
  {
    path: allPaths.profiles,
    element: Profiles,
  },
  {
    path: allPaths.notifications,
    element: Notifications,
  },
  {
    path: allPaths.messages,
    element: Messages,
  },
  {
    path: allPaths.explore,
    element: Explore,
  },
];
