import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyB8ZyyaFjf3-SIp5UIxB9aGWQO6rQDLOb0",
    authDomain: "jain-family-app.firebaseapp.com",
    databaseURL: "https://jain-family-app-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jain-family-app",
    storageBucket: "jain-family-app.appspot.com",
    messagingSenderId: "275427932174",
    appId: "1:275427932174:web:f3c25f699d7d802967e45f",
    measurementId: "G-6J8P4QZBEN"
});

const auth = getAuth(firebaseApp);

export function writeUserData(userId, userFirstName, userLastName, userEmail) {
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId);

    set(reference, {
        first_name: userFirstName,
        last_name: userLastName,
        email: userEmail
    });
}

// writeUserData("001","Saugat","Thapa","asdf");

export function sayHello(){
    alert("helloo");
}

