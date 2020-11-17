import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'


const StripeCheckoutButton = ( { price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HhFGpJbp6axQ3t41KItVK2T4DHHwQdBuDeNrQGNMQPiEEEdq9GPmXG6mneTgp8qis4bNMqlOCA3ApnBlJRS9tV200b18mJzl7';


    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', error);
            alert(
                'There was an issue with your payment. Please sure use the provided credit cart.'
            )
        })  
    }

    return(
        <StripeCheckout 
            label= 'Pay Now'
            name= 'e-Shopping Ltd.'
            billingAddress
            shippingAddress
            image= 'https://svgshare.com/i/CUz.svg'
            description= {`Your total is $${price}`}
            amount= {priceForStripe}
            panelLabel= 'Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;