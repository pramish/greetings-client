import { gql } from "graphql-request";

export const showFriendsQuery = gql`
  query {
    myFriends {
      name
      _id
      email
      date_of_birth
      phone_number
    }
  }
`;
