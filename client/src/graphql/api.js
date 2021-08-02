import { GraphQLClient } from "graphql-request";
const ENDPOINT = "/graphql";
const GraphQlClient = new GraphQLClient(ENDPOINT, {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("Token"),
  },
});
export default GraphQlClient;
