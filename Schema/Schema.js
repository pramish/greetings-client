const { buildSchema } = require('graphql');

module.exports = schema = buildSchema(`
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
  type RootQuery {
    users: [User]
  }
  type RootMutation {
    createUser(userInput: UserInput): User
	}
	schema{
		query:RootQuery
		mutation:RootMutation
	}
`);
