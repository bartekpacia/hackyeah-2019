const admin = require('firebase-admin');


admin.initializeApp();

const DB = admin.firestore();
const AUTH = admin.auth();
const union = admin.firestore.FieldValue.arrayUnion;

DB.settings({ timestampsInSnapshots: true });

export default { DB, AUTH, union };