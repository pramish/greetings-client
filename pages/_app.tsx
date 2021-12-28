import "../src/styles/globals.scss";

import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { getApolloClient } from "../lib/apollo-client";

const client = getApolloClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
