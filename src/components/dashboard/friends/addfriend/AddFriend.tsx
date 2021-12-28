import { useState } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Button from "@mui/material/Button";

import AddFriendStyle from "../../../../styles/dashboard/friends/AddFriend.module.scss";

export const AddFriend = () => {
  const [name, setName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(new Date());

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDateOfBirthChange = (dateOfBirth: Date | null) => {
    setDateOfBirth(dateOfBirth);
  };
  return (
    <div className={AddFriendStyle.AddFriendContainer}>
      <p className={AddFriendStyle.AddFriendHeading}>Add a friend</p>
      <TextField
        id="name_textfield"
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleNameChange}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date of birth"
          inputFormat="dd/MM/yyyy"
          value={dateOfBirth}
          onChange={handleDateOfBirthChange}
          renderInput={(params: TextFieldProps) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button variant="contained" color="inherit">
        Add friend
      </Button>
    </div>
  );
};
