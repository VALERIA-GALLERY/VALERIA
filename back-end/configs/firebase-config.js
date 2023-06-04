var admin = require("firebase-admin");

var serviceAccount = require("./valeria-b884e-firebase-adminsdk-liv59-daeedee660.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin