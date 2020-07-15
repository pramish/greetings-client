const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const expressPlayground = require('graphql-playground-middleware-express')
  .default;

const app = express();
app.use(bodyParser.json());
const schema = require('./Schema/Schema');
const rootValue = require('./RootValue/RootValue');
const PORT = process.env.PORT || 5000;
const isAuth = require('./auth/auth');
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type',
    'Authorization'
  );
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use(isAuth);
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database is successfully connected');
    app.listen(PORT, () => {
      console.log(`Server is listening to PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
