import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

const app = initializeApp({
    apiKey: "AIzaSyB8ZyyaFjf3-SIp5UIxB9aGWQO6rQDLOb0",
    authDomain: "jain-family-app.firebaseapp.com",
    databaseURL: "https://jain-family-app-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jain-family-app",
    storageBucket: "jain-family-app.appspot.com",
    messagingSenderId: "275427932174",
    appId: "1:275427932174:web:f3c25f699d7d802967e45f",
    measurementId: "G-6J8P4QZBEN"
});

//add user into db
export function writeUserData(userId, userFirstName, userLastName, userEmail) {
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId);

    set(reference, {
        first_name: userFirstName,
        last_name: userLastName,
        email: userEmail
    });
}


//render captcha
const auth = getAuth();

const generateRecaptcha = () =>{
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            document.getElementById('otp_btn').classList.remove('d-none');
        },
        'expired-callback': () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            document.getElementById('otp_btn').classList.add('d-none');
        }
    }, auth);
    recaptchaVerifier.render();
}

export function renderCaptcha(){
    generateRecaptcha();
}

//send OTP
let appVerifier = window.recaptchaVerifier;

export function phoneAuth(phoneNum){
    signInWithPhoneNumber(auth, phoneNum, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });
}


//======================================


// const auth = getAuth();
// const generateRecaptcha = () =>{
//     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//         'size': 'normal',
//         'callback': (response) => {
//           // reCAPTCHA solved, allow signInWithPhoneNumber.
//         }
//     }, auth);
//     recaptchaVerifier.render();
// }

// export function authhh(userPhoneNum){
//     generateRecaptcha();

//     let appVerifier = window.recaptchaVerifier;

//     signInWithPhoneNumber(auth, userPhoneNum, appVerifier)
//     .then(confirmationResult => {
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         window.confirmationResult = confirmationResult;
//         // ...
//     }).catch((error) => {
//         // Error; SMS not sent
//         console.log(error);
//     });
// }
