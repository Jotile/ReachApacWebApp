const admin = require("firebase-admin");
// const serviceAccount = require("./serviceAccountKey.json"); // ← download from Firebase Console(for dev)
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = db;
