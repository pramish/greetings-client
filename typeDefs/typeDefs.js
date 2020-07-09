const { gql } = require("apollo-server");

module.exports = typeDefs = gql`
	type User {
		_id: ID!
		name: String!
		email: String!
		dateOfBirth: String!
		# friends: [User]
	}
	input UserInput {
		name: String!
		email: String!
		dateOfBirth: String!
	}
	type Query {
		users: [User]
	}
	type Mutation {
		createUser(name: String): String
	}
`;
