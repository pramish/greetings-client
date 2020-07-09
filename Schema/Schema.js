const { buildSchema } = require('graphql');

module.exports = schema = buildSchema(`
  type User {
    _id: ID!
    name: String!
    email: String!
    dateOfBirth: String!
    # friends: [User]
	}
	input EmailInput{
		sender: String!
		receiver: String!
		message: String!
	}
	type Email{
		sender: String!
		receiver: String!
		message: String!
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
		sendEmail(emailInput: EmailInput): Email
	}
	schema{
		query:RootQuery
		mutation:RootMutation
	}
`);
