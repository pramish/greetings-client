const User = require('../models/User');
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
};
