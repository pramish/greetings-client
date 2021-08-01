const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const User = require("../models/User");
const Friends = require("../models/Friend");

// This function is used to send the message via Cron Jobs
const getDateof = async () => {
  try {
    const todayDateTimestamp = new Date().getTime();
    const todayDay = new Date(todayDateTimestamp).toLocaleString("en-GB", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    const birthdayFriends = await Friends.find({
      birthday_date: todayDay,
    });
    if (birthdayFriends.length === 0) return;
    birthdayFriends.map(async (eachBirthdayFriend) => {
      const phoneNumber = eachBirthdayFriend.phone_number;
      const message = `Happy Birthday ${eachBirthdayFriend.name}!`;
      // await sendMessage("0410171700", phoneNumber, message);
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
