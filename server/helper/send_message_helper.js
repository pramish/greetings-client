const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendMessage = async (senderPhone, receiverPhone, body) => {
  await client.messages
    .create({
      body,
      to: receiverPhone,
      from: senderPhone,
    })
    .then((data) => {
      console.log(data.sid);
    });
};

module.exports = sendMessage;
