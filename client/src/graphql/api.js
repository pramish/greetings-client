import { GraphQLClient } from "graphql-request";
const ENDPOINT = "/graphql";
const GraphQlClient = new GraphQLClient(ENDPOINT, {});
export default GraphQlClient;
