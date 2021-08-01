const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const Friends = require("../models/Friend");
const SendEmail = require("../helper/send_email_helper");
const sendMessage = require("../helper/send_message_helper");
const getFriendsDateofBirth = require("../helper/send_message_helper");

module.exports = RootValue = {
  users: async () => {
    const users = await User.find();
    return users;
  },
  createUser: async (args) => {
    try {
      const user = await User.findOne({ email: args.userInput.email });
      if (user) {
        throw new Error("User already exists");
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
      if (!isAuth) throw new Error("Please autheticate");
      console.log("Yaha aako xa ra??", req.userId);
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
        throw new Error("Email or Password is incorrect");
      }
      const isEqual = await bcrypt.compare(
        args.loginInput.password,
        user.password
      );
      if (!isEqual) {
        throw new Error("Email or Password is incorrect");
      }
      const token = jwt.sign(
        {
          userID: user.id,
          email: user.email,
        },
        process.env.SECRET,
        { expiresIn: "1h" }
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
  sendSms: async (args) => {
    try {
      console.log(args.smsInput.receiverPhone);
      await sendMessage(
        args.smsInput.senderPhone,
        args.smsInput.receiverPhone,
        args.smsInput.message
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  addFriends: async (args, req) => {
    try {
      const isAuth = await req.isAuth;
      if (!isAuth) throw new Error("Please autheticate");
      const userId = await req.userId;
      const name = args.friendsInput.name;
      const email = args.friendsInput.email;
      const date_of_birth = Date.parse(args.friendsInput.date_of_birth) / 1000;
      const phone_number = args.friendsInput.phone_number;
      const friend = new Friend({
        name,
        email,
        date_of_birth,
        phone_number,
      });

      await friend.save();

      await User.findOneAndUpdate(
        {
          _id: userId,
        },
        {
          $push: {
            friends: friend._id,
          },
        }
      );
      return friend;
    } catch (e) {
      throw new Error(e);
    }
  },
  myFriends: async (args, req) => {
    try {
      const isAuth = await req.isAuth;
      if (!isAuth) throw new Error("Please autheticate");
      const userId = await req.userId;
      const user = await await User.findById({ _id: userId });
      if (user.friends === null) return;

      return user.friends.map(async (eachFriendsId) => {
        return await Friends.findById({ _id: eachFriendsId });
      });
    } catch (e) {
      throw new Error(e);
    }
  },
};
