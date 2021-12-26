import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getApolloClient = () => {
  return new ApolloClient({
    uri: "process.env.URL || have your own GraphQL API URL",
    cache: new InMemoryCache(),
  });
};
