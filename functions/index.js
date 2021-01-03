const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I55oyBQXbsrrJsgEpttSopg0RAXmwcO4eLXH5eDJ4RYWBYUHSqsWRyPDxOePH6Zm6pg5jJzFaQLZV2aQjvJZpkP007EdrGWx1')
// api

// app config
const app = express();

// middle ware
app.use(cors({ origin: true }));
app.use(express.json());

// api routes
app.get('/', (requist, responce) => responce.status(200).send('hello from express'))
app.post('/payments.create', async (req, res) => {
    const total = req.query.total
    console.log(total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:'usd'
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})
// listn command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-20557/us-central1/api