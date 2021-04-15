const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "ssk_test_51IUYEeI9Uk2lKdUdAdvwuGRUKpaKeZKTP0o28tyY3JbnebnUmgZOFvD2tX5jmjmnphqZ9pw4lPv80RKtYVOpPi5N00v5bQhiKW"
);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//API

//API CONFIG
const app = express();

//MIDDLEWARE
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Reccieved for this amount:", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen Command
exports.api = functions.https.onRequest(app);
