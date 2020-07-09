const User = require("../models/User");
module.exports = resolvers = {
	Query: {
		users: async () => {
			const user = await User.find();
			return { ...user._doc };
		},
	},
	Mutation: {
		createUser: async (args) => {
			try {
				console.log(args.name);

				// const newUser = new User({
				// 	name: args.name,
				// 	email: args.email,
				// 	dateOfBirth: args.dateOfBirth,
				// });
				// console.log("->>>>>>asdhksfhg", args.name);

				// await newUser.save();
				// return { ...newUser._doc };
			} catch (error) {
				console.log("Yo error aako ho ra???? ->>>>>>>>", error);
			}
		},
	},
};
