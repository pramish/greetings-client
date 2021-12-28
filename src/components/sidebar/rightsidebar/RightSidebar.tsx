import { useState } from "react";
import type { NextPage } from "next";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

import RegisterStyles from "../../../styles/sidebar/rightsidebar/RightSideBar.module.scss";
import { RegisterContainer } from "./register";
import { Login } from "./login";

export const RightSidebar: NextPage = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  const handleHelperText = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Paper elevation={12} className={RegisterStyles.rightSidebarContainer}>
      {showLogin ? (
        <p className={RegisterStyles.loginHeading}>Access your account</p>
      ) : (
        <p className={RegisterStyles.registerHeading}>Create your account</p>
      )}
      {showLogin ? <Login /> : <RegisterContainer />}
      <Button variant="text" onClick={handleHelperText}>
        {showLogin ? "Access to your account" : "Already have an account"}
      </Button>
      {showLogin && (
        <p className={RegisterStyles.forgotPassword}>Forgot your password?</p>
      )}
    </Paper>
  );
};
