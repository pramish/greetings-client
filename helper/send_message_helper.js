const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const cron = require('cron').CronJob;

const User = require('../models/User');
const Friends = require('../models/Friend');

module.export = getFriendsDateofBirth = async () => {
  try {
    // const UserFriends = await User.find();
    // UserFriends.friends.map(async (eachFriendsId) => {
    //   let hello;
    //   hello = await Friends.findById({ _id: eachFriendsId });
    //   const phoneNumber = hello.phone_number;
    //   const date_of_birth = hello.date_of_birth;
    //   const newDate = date_of_birth.split('-');
    //   const month = 8;
    //   const day = 18;
    // const month = newDate[1];
    // const day = newDate[2];
    console.log('Am I running');
    sendMessage('++12512554174', '+61410171700', 'This is a birthday test');
    // var job = new cron(
    //   `* * * ${day} ${month} *`,
    //   // sendMessage(senderPhone, receiverPhone, body), The Sender phone has to be my new number and also the body has to be chosen by the user
    //   null,
    //   true,
    //   'Australia/Sydney'
    // );
    // job.start();
    // });
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
      .then((data) => {
        console.log(data.sid);
      });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = sendMessage;
