const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

// Dummy function to check whether it works
exports.https = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase to HackYeah 2019!");
});

const docRef = db.collection("dummyQuestions").doc("dummyQuestionCount");

// Can't run more often than every 1 minute
exports.questionGenerator = functions.pubsub
  .schedule("every 1 minutes")
  .onRun(async context => {
    console.log("questionGenerator run...");
    const countDocument = await docRef.get();
    const count = countDocument.data().count;

    console.log(`count: ${count}`);

    const newCount = count + 1;
    await docRef.set({ count: newCount });

    return null;
  });
