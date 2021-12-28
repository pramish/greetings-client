import { useState } from "react";
import type { NextPage } from "next";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
// import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Button from "@mui/material/Button";

type StateValues = {
  email: string;
  password: string;
  name: string;
  dateOfBirth: Date;
  isShowPassword: boolean;
};

type OnChangeValue = "email" | "name" | "password" | "dateOfBirth" | "password";

export const Register: NextPage = () => {
  const [stateValues, setStateValues] = useState<StateValues>({
    email: "",
    name: "",
    password: "",
    dateOfBirth: new Date(""),
    isShowPassword: false,
  });

  const handleChange =
    (prop: OnChangeValue) => (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("What is prop ->", prop);

      setStateValues({ ...stateValues, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setStateValues({
      ...stateValues,
      isShowPassword: !stateValues.isShowPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <TextField
        id="name_textfield"
        label="Name"
        variant="outlined"
        value={stateValues.name}
        onChange={handleChange("name")}
      />
      <TextField
        id="email_textfield"
        label="Email"
        variant="outlined"
        value={stateValues.email}
        onChange={handleChange("email")}
      />
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={stateValues.isShowPassword ? "text" : "password"}
          value={stateValues.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {stateValues.isShowPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date of birth"
          inputFormat="MM/dd/yyyy"
          value={stateValues.dateOfBirth}
          onChange={handleChange("dateOfBirth")}
          renderInput={(params: TextFieldProps) => <TextField {...params} />}
        />
      </LocalizationProvider> */}

      <Button variant="contained" color="success">
        Register
      </Button>
    </>
  );
};
