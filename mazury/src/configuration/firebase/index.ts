const admin = require('firebase-admin');
//const CREDENTIALS = require('./credentials.json');


admin.initializeApp();

const DB = admin.firestore();
const AUTH = admin.auth();
const union = admin.firestore.FieldValue.arrayUnion;

DB.settings({ timestampsInSnapshots: true });

export default { DB, AUTH, union };