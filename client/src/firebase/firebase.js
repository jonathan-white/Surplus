import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBIdkCMFwpKfN9PPB_oJwIvIEDKZxPdWpc",
  authDomain: "surplus-6507a.firebaseapp.com",
  databaseURL: "https://surplus-6507a.firebaseio.com",
  projectId: "surplus-6507a",
  storageBucket: "surplus-6507a.appspot.com",
  messagingSenderId: "461179512586"
};

if(!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
