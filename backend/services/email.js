const nodemailer = require("nodemailer");
const config = require('../config/email');

// async..await is not allowed in global scope, must use a wrapper
const sendmail = async (userText, attachment, type) => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    let htmlContent = `${userText}<img src="${attachment}" />`;
    if (type === 'video') {
        htmlContent = `${userText}<video src="${attachment}" />`;
    }
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: config.reporterEmail, // sender address
        to: config.reportEmail, // list of receivers
        subject: config.subject, // Subject line
        text: "use html view", // plain text body
        html: htmlContent, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// catch errors with => main().catch(console.error);

module.exports = sendmail