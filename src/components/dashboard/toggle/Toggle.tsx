import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";

import { TabPanel } from "./TabPanel";
import { AddFriend } from "../friends/addfriend";
import { ListFriend } from "../friends/listfriend";

export const Toggle = () => {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleToggleFriends = (
    event: React.SyntheticEvent,
    newTabValue: number,
  ) => {
    setTabValue(newTabValue);
  };
  return (
    <>
      <Box>
        <Tabs
          value={tabValue}
          onChange={handleToggleFriends}
          aria-label="toggle friends"
        >
          <Tab label="Add a friend" />
          <Tab label="List my friends" />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <AddFriend />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <ListFriend />
      </TabPanel>
    </>
  );
};
