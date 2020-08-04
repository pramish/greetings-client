const { buildSchema } = require('graphql');

module.exports = schema = buildSchema(`
	type User {
		_id: ID!
		name: String!
		email: String!
		dateOfBirth: String!
		password: String!
	}
	type Email{
		sender: String!
		receiver: String!
		message: String!
	}
	type sms{
		senderPhone: String!
		receiverPhone: String!
		message: String!
	}
	input SmsInput{
		senderPhone: String!
		receiverPhone: String!
		message: String!
	}
	input EmailInput{
		sender: String!
		receiver: String!
		message: String!
	}
	input LoginInput{
		email: String!
		password: String!
	}
	input UserInput {
		name: String!
		email: String!
		dateOfBirth: String!
		password: String!
	}
	type AuthData{
		userId: ID
        token: String!
        tokenExpiration: Int!
	}
	type RootQuery {
		users: [User!]!
		login(loginInput:LoginInput):AuthData!
	}
	type RootMutation {
		createUser(userInput: UserInput): User
		sendEmail(emailInput: EmailInput): Email
		sendSms(smsInput:SmsInput): sms
	}
	schema {
		query:RootQuery
		mutation:RootMutation
	}
`);
