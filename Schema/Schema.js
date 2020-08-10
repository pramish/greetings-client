const { buildSchema } = require('graphql');

module.exports = schema = buildSchema(`
	type User {
		_id: ID!
		name: String!
		email: String!
		dateOfBirth: String!
		password: String!
	}
	type userFriends{
		_id: ID!
		name: String!
		email: String!
		date_of_birth: String!
		phone_number:String!
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
	type Friends{
		_id: ID!
		name: String!
		email: String!
		date_of_birth: String!
		phone_number:String!
	}
	input FriendsInput{
		name: String!
		email: String!
		date_of_birth: String!
		phone_number:String!
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
		userId: ID!
        token: String!
        tokenExpiration: Int!
	}
	type RootQuery {
		users: [User!]
		login(loginInput:LoginInput):AuthData!
	}
	type RootMutation {
		createUser(userInput: UserInput): User
		sendEmail(emailInput: EmailInput): Email
		sendSms(smsInput:SmsInput): sms
		addFriends(friendsInput:FriendsInput): Friends
	}
	schema {
		query:RootQuery
		mutation:RootMutation
	}
`);
