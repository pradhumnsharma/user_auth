import firebase from 'firebase/app';
import 'firebase/auth';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAWFZ8kjKvt7e-hbytlGEnEPtOoN-j4dqA",
    authDomain: "user-authentication-77fce.firebaseapp.com",
    databaseURL: "https://user-authentication-77fce.firebaseio.com",
    projectId: "user-authentication-77fce",
    storageBucket: "user-authentication-77fce.appspot.com",
    messagingSenderId: "492921718332"
  };
  if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
 const auth = firebase.auth();

export {
  auth,
};