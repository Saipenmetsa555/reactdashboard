import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Mailbox",
    icon: <EmailIcon />,
    link: "/email",
  },
  {
    title: "Analytics",
    icon: <AssessmentIcon />,
    link: "/analytics",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Friends",
    icon: <GroupIcon />,
    link: "/friends",
  },
  {
    title: "Images",
    icon: <LinkedInIcon />,
    link: "/linkedin",
  },
];
