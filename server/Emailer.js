// Import pwd form form mailer where we can hide our mailbox password
const pwd = require('./config').pwd
const our_email = require('./config').email
const emailTemplate = require('./emailTemplate')

const nodemailer = require('nodemailer');

// selecting mail service and authorizing with our credentials
const transport = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: our_email,
		pass: pwd,
	},
});

// composing our email

var emptySubj = 'Here is the message: '
const sendEmail =(customerEmail, firstName, lastName, orderNumber )=>{

		const mailOptions = {
			from: our_email,
			to: customerEmail,
			// fetching users email from the contact form
			subject: "Your order from Christine Chang Art",
			// composing body of the email
			html: emailTemplate(firstName, lastName, orderNumber)
		};
		transport.sendMail(mailOptions, (error) => {
			if (error) {
				console.log("error sending email:", error)
				return({error:error, success:false})
			}
			console.log("success sending email")
			return({error:null, success:true})

		})

	}

module.exports = sendEmail;