const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.refresh = functions.https.onRequest(async (request, response) => {
  // Here the actual business logic begins
  const factsQuery = await db.collection("QUESTIONS").get();
  const facts = factsQuery.docs;

  const randomFact = facts[Math.floor(Math.random() * facts.length)]; // Pick a random fact
  const fact = randomFact.data();

  // Delete the correct answer from the current question, so it's NOT visible on the client side
  delete fact.acceptedAnswerId;

  // Set the current question
  await db
    .collection("current-question")
    .doc("current-question")
    .set(fact);

  response.json(fact);
});
