const nodemailer = require("nodemailer");
const pug = require("pug");
const htmlToText = require("html-to-text");

module.exports = class Email {
    constructor(user , url) {
        this.to = user.email;
        this.firstName = user.username.split(" ")[0];
        this.url = url;
        this.from = process.env.EMAIL_FROM;
    }

    newTransporter() {
        if(process.env.NODE_ENV === "production") {
            return nodemailer.createTransport({
                service : "Brevo",
                auth : {
                    user : process.env.BRAVO_LOGIN,
                    pass : process.env.BRAVO_KEY,
                }
            })
        } 
        else {
            return nodemailer.createTransport({
                host : process.env.NODE_MAILER_HOST,
                port : 587,
                auth : {
                    user : process.env.NODE_MAILER_USERNAME,
                    pass : process.env.NODE_MAILER_PASSWORD
                }
            })
            
        }
    }

    async send(template , subject) {
        const html = pug.renderFile(`${__dirname}/../Views/Emails/${template}.pug` , {
            firstName : this.firstName,
            url : this.url,
            subject,
        })

        const emailOptions = {
            from : this.from,
            to : this.to,
            subject,
            html,
            text : htmlToText.htmlToText(html),
        }

        await this.newTransporter().sendMail(emailOptions)
    }

    async sendWelcome() {
        await this.send("welcome" , "Welcome to (ArabTutor) our website for dubbing to Arabic")
    }

    async resetPassword() {
        await this.send("resetPassword" , "Your password reset token (valid for only 10 minutes)")
    }
}