var admin = require('firebase-admin');

var serviceAccount = require('/Users/musiiko/code/adminSDK/adminSDK/adm_sdk/adminsdk-2f2dc-firebase-adminsdk-ruuwb-8be380ecde.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
  
var uid = '0cJgu8LEEpacOqD6zMIzFINaW3p2';

admin.auth()
    .getUser(uid)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(userRecord.toJSON())
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });