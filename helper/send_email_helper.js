const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.API_KEY_SECRET);
module.exports = send_birthday_message = async (sender, receiver, text) => {
  await sgMail.send({
    to: receiver,
    from: sender,
    text: text,
    subject: 'Happy Birthday to you',
  });
};
