import React, { useState } from "react";
import {
  TextFieldProps,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  DesktopDatePicker,
  LocalizationProvider,
  LoadingButton,
} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { REGISTER_USER_DATA } from "../../../../types";

import RegisterStyles from "../../../../styles/sidebar/rightsidebar/register/Register.module.scss";

type RegisterProps = {
  onRegisterUserClick: (user: REGISTER_USER_DATA) => void;
  isError: boolean;
  isSuccess: boolean;
  message: string;
};

export const Register = ({
  onRegisterUserClick,
  isError,
  isSuccess,
  message,
}: RegisterProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(new Date());
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleDateOfBirthChange = (dateOfBirth: Date | null) => {
    setDateOfBirth(dateOfBirth);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleRegisterUserSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const user = {
      email,
      name,
      password,
      dateOfBirth,
    };
    onRegisterUserClick(user);
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleRegisterUserSubmit}
      className={RegisterStyles.registerContainer}
    >
      <TextField
        required
        id="name_textfield"
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleChangeName}
      />
      <TextField
        required
        id="email_textfield"
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleChangeEmail}
      />
      <FormControl variant="outlined">
        <InputLabel required htmlFor="outlined-adornment-password">
          Password
        </InputLabel>
        <OutlinedInput
          required
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handleChangePassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date of birth"
          inputFormat="dd/MM/yyyy"
          value={dateOfBirth}
          onChange={handleDateOfBirthChange}
          renderInput={(params: TextFieldProps) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LoadingButton
        variant="contained"
        color="success"
        loading={loading}
        type="submit"
      >
        Register
      </LoadingButton>
      {isError && !isSuccess && (
        <p className={RegisterStyles.errorMessage}>{message}</p>
      )}

      {!isError && isSuccess && (
        <p className={RegisterStyles.succesMessage}>{message}</p>
      )}
    </form>
  );
};
