
import firebase from "firebase";

var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDQtc-ukp2dc58l9HTJFideBWNpc0hgSxg",
    authDomain: "react-my-app-bd41f.firebaseapp.com",
    projectId: "react-my-app-bd41f",
    storageBucket: "react-my-app-bd41f.appspot.com",
    messagingSenderId: "224081701876",
    appId: "1:224081701876:web:cecf5d476a390d1f1fe7a1"

});

var db = firebaseApp.firestore();

export { db };