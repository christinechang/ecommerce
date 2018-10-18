const sendEmail = require('../Emailer')
const config = require ('../config')

const stripe = require("stripe")(config.secretStripe);

const postStripeCharge = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
        res.status(500).send({ error: stripeErr });
    } else {
        //send confirmation email to customer and admin
        sendEmail('christine_chang@yahoo.com', 'christine', 'chang', '12345x')
        res.status(200).send({ success: stripeRes });
    }
}
module.exports =  (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res))
};