import { useState } from "react";
import { useMutation } from "@apollo/client";

import { Register } from "./Register";

import { REGISTER_USER_DATA } from "../../../../types";

import { REGISTER } from "../../../../api/auth";

export const RegisterContainer = () => {
  const [createUser, { data, loading, error }] = useMutation(REGISTER);
  const handleRegisterUser = (user: REGISTER_USER_DATA) => {
    createUser({ variables: user });
    console.log("What is under data ->", data);
    console.log("What is under error ->", error);
  };
  return (
    <Register onRegisterUserClick={handleRegisterUser} loading={loading} />
  );
};
