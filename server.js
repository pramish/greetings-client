const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers/resolvers");
const typeDefs = require("./typeDefs/typeDefs");
require("dotenv").config();
const mongoose = require("mongoose");

const apolloServer = new ApolloServer({ typeDefs, resolvers });

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database is successfully connected");
		apolloServer.listen().then(({ url }) => {
			console.log(`Server is running on PORT ${url}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
