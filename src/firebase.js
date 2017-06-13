import firebase from 'firebase';

var config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "snack-tracker-2.firebaseapp.com",
    databaseURL: "https://snack-tracker-2.firebaseio.com",
    projectId: "snack-tracker-2",
    storageBucket: "snack-tracker-2.appspot.com",
    messagingSenderId: "658660513035"
};

var myFirebase = firebase.initializeApp(config);
export default myFirebase;
