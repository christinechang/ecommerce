const config = require ('../config')

const stripe = require("stripe")(config.secretStripe);

const postStripeCharge = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
        res.status(500).send({ error: stripeErr });
    } else {
        res.status(200).send({ success: stripeRes });
    }
}
module.exports =  (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res))
};