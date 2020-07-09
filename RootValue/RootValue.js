const User = require('../models/User');
const SendEmail = require('../helper/send_email_helper');
module.exports = RootValue = {
  users: async () => {
    const user = await User.find();
    return { ...user._doc };
  },
  createUser: async (args) => {
    try {
      const newUser = new User({
        name: args.userInput.name,
        email: args.userInput.email,
        dateOfBirth: args.userInput.dateOfBirth,
      });
      await newUser.save();
      return { ...newUser._doc };
    } catch (error) {
      console.log('Yo error aako ho ra???? ->>>>>>>>', error);
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
};
