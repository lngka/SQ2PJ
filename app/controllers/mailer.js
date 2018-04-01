"use strict";
const nodemailer = require("nodemailer");

function Mailer() {
    this.sendTextTo = function(toEmail, subject, text) {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            "service": "gmail",//modify this accordingly
            "auth": {
                "user": process.env.EMAIL_ACCOUNT,
                "pass": process.env.EMAIL_PASSWORD
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            "from": "'AthenaG8' <support@athenaG8.de>", // sender address
            "to": toEmail, // list of receivers
            "subject": subject, // Subject line
            "text": text, // plain text body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        });
    }
}
module.exports = Mailer;
