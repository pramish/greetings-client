const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const SendEmail = require('../helper/send_email_helper');
module.exports = RootValue = {
  users: async () => {
    const user = await User.find();
    return { ...user._doc };
  },
  createUser: async (args) => {
    try {
      const user = await User.findOne({ email: args.userInput.email });
      if (user) {
        throw new Error();
      } else {
        const hashedPassword = await bcrypt.hash(args.userInput.password, 10);
        const newUser = new User({
          name: args.userInput.name,
          email: args.userInput.email,
          password: hashedPassword,
          dateOfBirth: args.userInput.dateOfBirth,
        });
        await newUser.save();
        return { ...newUser._doc };
      }
    } catch (error) {
      throw new Error();
    }
  },
  sendEmail: async (args) => {
    try {
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
      console.log('Yo error aako ho ra->>>>', err);
      throw new Error();
    }
  },
  login: async ({ email, password }) => {
    try {
      const token = jwt.sign(
        {
          userID: 'hello',
          email,
        },
        process.env.SECRET,
        { expiresIn: '1h' }
      );
      return {
        token: token,
      };
    } catch (error) {
      console.log('Error aayo ra??->>>>', error);
    }
  },
};
