const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

const docRef = db.collection("dummyQuestions").doc("dummyQuestionCount");

exports.refresh = functions.https.onRequest(async (request, response) => {
  // Here the actual business logic begins
  const factsQuery = await db.collection("interesting-facts").get();
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

// Currently unused
// pub/sub can't run more often than every 1 minute
exports.questionGenerator = functions.pubsub
  .schedule("every 5 minutes")
  .onRun(async context => {
    console.log("questionGenerator run...");
    const countDocument = await docRef.get();
    const count = countDocument.data().count;

    console.log(`count: ${count}`);

    const newCount = count + 1;
    await docRef.set({ count: newCount });

    return null;
  });
