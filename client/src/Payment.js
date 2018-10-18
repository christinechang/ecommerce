import React from 'react'
import axios from 'axios';

// import stripe checkout first
import StripeCheckout from 'react-stripe-checkout';

const config = require('./config')


// that's your publishable jey obtained form strip, for testing use testing key
const STRIPE_PUBLISHABLE = config.STRIPE_PUBLISHABLE;

// this will be the route to hit on the server after getting token from stripe
const PAYMENT_SERVER_URL = '/payment';


const CURRENCY = 'EUR';

const fromEuroToCent = amount => amount * 10;

const successPayment = data => {
    debugger
	alert('Payment Successful');
	console.log(data);
};

const errorPayment = data => {
    debugger
	alert('Payment Error');
	console.log(data);
};

const onToken = (amount, description) => token =>
axios.post('http://localhost:3010/payment',
{
	description,
	source: token.id,
	currency: CURRENCY,
    amount: fromEuroToCent(amount)
})
.then(successPayment)
.catch(errorPayment);


const Payment = ({name, description, amount }) => {
    return(
        <StripeCheckout
            name={name}
            description={description}
            amount={fromEuroToCent(amount)}
            token={onToken(amount, description)}
            currency={CURRENCY}
            stripeKey={STRIPE_PUBLISHABLE}
            label = 'Pay Now'
        />

        )
}
export default Payment;
