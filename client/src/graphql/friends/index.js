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
export const deleteFriendQuery = gql`
  query deleteFriend($friendId: String!) {
    deleteFriend(friendId: $friendId) {
      _id
      email
      name
      date_of_birth
      phone_number
    }
  }
`;
