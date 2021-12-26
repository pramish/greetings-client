import type { NextPage } from "next";
import Image from "next/image";
import Paper from "@mui/material/Paper";

import LeftSideBarStyles from "../../../styles/sidebar/leftsidebar/LeftSideBar.module.scss";
import BirthdayImage from "../../../images/birthday.jpeg";

export const LeftSidebar: NextPage = () => {
  return (
    <Paper elevation={12} className={LeftSideBarStyles.leftSidebarContainer}>
      <Image src={BirthdayImage} alt="birthday_image" />
      <p className={LeftSideBarStyles.title}>Always stay ahead when wishing</p>
    </Paper>
  );
};
