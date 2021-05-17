// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyCs93xva8b5sEsTWY-XPrJzbskQK4FNYRU",
        authDomain: "todo-app-cp-31a7c.firebaseapp.com",
        projectId: "todo-app-cp-31a7c",
        storageBucket: "todo-app-cp-31a7c.appspot.com",
        messagingSenderId: "173531934675",
        appId: "1:173531934675:web:5ab9562f45883bac040926",
        measurementId: "G-NJWR0HGX7D"

});

const db = firebaseApp.firestore();
export default db;