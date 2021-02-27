import { gql } from "graphql-request";

export const registerQuery = gql`
  mutation registerUser(
    $email: String!
    $password: String!
    $name: String!
    # $phoneNumber: String!
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
export const loginQuery = gql`
  query login($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      userId
      token
      tokenExpiration
    }
  }
`;
