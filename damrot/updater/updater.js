require("dotenv").config();
const url = process.env.APIURL;
const admin = require("firebase-admin");
const cron = require("node-cron");
const request = require("request-promise-native");
const credentials = require("./firebase-credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

const db = admin.firestore();

const cronExp = "*/10 * * * * *"; // Every 10 seconds

console.log("updater is running...");
update();

cron.schedule(cronExp, update);

// Just ping a Cloud Function so it'll update the question
async function update() {
  const res = await request.get(
    "https://us-central1-hackyeah-2019.cloudfunctions.net/refresh"
  );

  console.log("run");
}
