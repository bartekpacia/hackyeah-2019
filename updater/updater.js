require("dotenv").config();
const url = process.env.APIURL;
const admin = require("firebase-admin");
const cron = require("node-cron");
const request = require("request-promise-native");
const credentials = require("./firebase-credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

console.log("works");
