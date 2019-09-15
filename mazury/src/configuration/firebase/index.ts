const admin = require('firebase-admin');

if (process.env.NODE_ENV !== "production") {
    const devCredentials = require("./hackyeah-2019-firebase-adminsdk-3jrt0-bc4e98a7a1.json")
    admin.initializeApp({
        credential: admin.credential.cert(devCredentials),
        databaseURL: "https://hackyeah-2019.firebaseio.com"
    });
}

else {
    admin.initializeApp();  
}


const DB = admin.firestore();
const AUTH = admin.auth();
const union = admin.firestore.FieldValue.arrayUnion;

DB.settings({ timestampsInSnapshots: true });

export default { DB, AUTH, union };