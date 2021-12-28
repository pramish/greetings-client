import type { NextPage } from "next";

import { LeftSidebar } from "../sidebar/leftsidebar";
import { RightSidebar } from "../sidebar/rightsidebar";

import HomepageModule from "../../styles/homepage/Homepage.module.scss";

export const HomePage: NextPage = () => {
  return (
    <div className={HomepageModule.homePageContainer}>
      <LeftSidebar />
      <RightSidebar />
    </div>
  );
};
