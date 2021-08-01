const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const cron = require("cron").CronJob;

const app = express();
const schema = require("./schema/schema");
const rootValue = require("./rootValue/rootValue");
const PORT = process.env.PORT || 5000;
const isAuth = require("./auth/auth");
const getDateof = require("./helper/send_message_helper");

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://usergreetings.herokuapp.com"
  );
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

const Cron_Job = new cron("0 0 0 * * *", () => {
  getDateof();
});
Cron_Job.start();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(isAuth);
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);
//Connects to Mongoose Database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database is successfully connected");
    app.listen(PORT, () => {
      console.log(`Server is listening to PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
