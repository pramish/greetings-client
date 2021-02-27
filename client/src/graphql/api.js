import { GraphQLClient } from "graphql-request";
const ENDPOINT = "http://localhost:5000/graphql";
const GraphQlClient = new GraphQLClient(ENDPOINT, {});
export default GraphQlClient;
