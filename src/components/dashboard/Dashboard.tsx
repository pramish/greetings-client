import { Paper } from "@mui/material";
import Button from "@mui/material/Button";

import DashboardStyle from "../../styles/dashboard/Dashboard.module.scss";
import { Toggle } from "./toggle";

type DashboardComponentProps = {
  name: string;
};

export const DashboardComponent = ({ name }: DashboardComponentProps) => {
  return (
    <>
      <div className={DashboardStyle.dashboardContainer}>
        <Paper elevation={12} className={DashboardStyle.userNameContainer}>
          <p>Welcome {name}!</p>
          <Button
            variant="contained"
            color="error"
            className={DashboardStyle.logoutButton}
          >
            Logout
          </Button>
        </Paper>
        <div className={DashboardStyle.toggleFriends}>
          <Toggle />
        </div>
      </div>
    </>
  );
};
