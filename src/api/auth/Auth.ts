import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation registerUser(
    $email: String!
    $password: String!
    $name: String!
    $dateOfBirth: String!
  ) {
    createUser(
      userInput: {
        name: $name
        email: $email
        dateOfBirth: $dateOfBirth
        password: $password
      }
    ) {
      _id
      name
      email
      dateOfBirth
    }
  }
`;
export const LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      userId
      token
      tokenExpiration
    }
  }
`;
