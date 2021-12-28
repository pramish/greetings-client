import { useState } from "react";
import { useMutation } from "@apollo/client";

import { Register } from "./Register";

import { REGISTER_USER_DATA } from "../../../../types";

import { REGISTER } from "../../../../api/auth";

export const RegisterContainer = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const [createUser] = useMutation(REGISTER);
  const handleRegisterUser = async (user: REGISTER_USER_DATA) => {
    const {
      data: {
        createUser: { success, message, isError },
      },
    } = await createUser({ variables: user });
    setError(isError);
    setSuccess(success);
    setMessage(message);
  };
  return (
    <Register
      onRegisterUserClick={handleRegisterUser}
      isError={error}
      isSuccess={success}
      message={message}
    />
  );
};
