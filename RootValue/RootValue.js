const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const SendEmail = require('../helper/send_email_helper');
module.exports = RootValue = {
  users: async () => {
    const user = await User.find();
    console.log(user);
    return user;
  },
  createUser: async (args) => {
    try {
      const user = await User.findOne({ email: args.userInput.email });
      if (user) {
        throw new Error('User already exists');
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 10);
      const newUser = new User({
        name: args.userInput.name,
        email: args.userInput.email,
        password: hashedPassword,
        dateOfBirth: args.userInput.dateOfBirth,
      });
      await newUser.save();
      return { ...newUser._doc };
    } catch (error) {
      throw new Error(error);
    }
  },
  sendEmail: async (args, req) => {
    try {
      const isAuth = await req.isAuth;
      if (!isAuth) throw new Error('Please autheticate');
      const sender = args.emailInput.sender;
      const receiver = args.emailInput.receiver;
      const message = args.emailInput.message;
      // I have to get a name and send to the email as well
      await SendEmail(sender, receiver, message);
      return {
        sender: sender,
        receiver: receiver,
        message: message,
      };
    } catch (err) {
      return err;
    }
  },
  login: async (args) => {
    try {
      const user = await User.findOne({ email: args.loginInput.email });
      if (!user) {
        throw new Error('Email or Password is incorrect');
      }
      const isEqual = await bcrypt.compare(
        args.loginInput.password,
        user.password
      );
      if (!isEqual) {
        throw new Error('Email or Password is incorrect');
      }
      const token = jwt.sign(
        {
          userID: user.id,
          email: user.email,
        },
        process.env.SECRET,
        { expiresIn: '1h' }
      );
      return {
        userId: user.id,
        token: token,
        tokenExpiration: 1,
      };
    } catch (error) {
      throw new Error(error);
    }
  },
};
