const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.refresh = functions.https.onRequest(async (request, response) => {
  // Here the actual business logic begins
  const factsQuery = await db.collection("QUESTIONS").get();
  const facts = factsQuery.docs;

  const randomFact = facts[Math.floor(Math.random() * facts.length)]; // Pick a random fact
  let fact = randomFact.data();
  fact.questionId = randomFact.id;

  // Delete the correct answer from the current question, so it's NOT visible on the client side
  delete fact.acceptedAnswerId;

  // Set the current question
  await db
    .collection("current-question")
    .doc("current-question")
    .set(fact);

  response.json(fact);
});

exports.info = functions.firestore
  .document("QUESTIONS/{questionId}")
  .onUpdate((change, context) => {
    if (change.after.data().successRate < 0.1) {
      console.warn(`${change.after.id} has successRate below 0.1`);
    } else {
      console.log(`${change.after.id} has successRate above 0.1. And works!`);
    }

    return null;
  });
