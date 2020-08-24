const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const User = require('../models/User');
const Friends = require('../models/Friend');

// This function is used to send the message via Cron Jobs
const getDateof = async () => {
  try {
    const UserFriends = await User.find();
    UserFriends.map((eachUser) => {
      if (eachUser.friends === null) {
        return null;
      } else {
        eachUser.friends.map(async (eachFriendsID) => {
          const userFriends = await Friends.findById({ _id: eachFriendsID });
          const date_of_birth = userFriends.date_of_birth;
          const phone_number = userFriends.phone_number;
          // const message = userFriends.message;
          const new_date_of_birth = date_of_birth.split('-');
          const month = new_date_of_birth[1]; // 00
          const day = new_date_of_birth[2]; // 00
          const dateObject = new Date();
          const new_day = dateObject.getUTCDate(); // 0
          const new_month = dateObject.getUTCMonth() + 1; // 00
          if (new_day == day && new_month == month) {
            sendMessage(
              '+12512554174',
              '+61410171700',
              'Happy Birthday to you. Many many happy returns of the day.'
            );
            // +12512554174;
          }
        });
      }
    });
  } catch (error) {
    throw new Error(error);
  }
};

const sendMessage = async (senderPhone, receiverPhone, body) => {
  try {
    await client.messages
      .create({
        body,
        to: receiverPhone,
        from: senderPhone,
      })
      .then((data) => {});
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = getDateof;
