import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getApolloClient = () => {
  return new ApolloClient({
    uri: process.env.greetingsURL,
    cache: new InMemoryCache(),
  });
};
