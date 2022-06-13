importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }
firebase.initializeApp({
    apiKey: "AIzaSyALlhYQsaGUrWMBUYvtOGL9714mROl_baI",
    authDomain: "johortourism-823d6.firebaseapp.com",
    projectId: "johortourism-823d6",
    storageBucket: "johortourism-823d6.appspot.com",
    messagingSenderId: "131025306370",
    appId: "1:131025306370:web:64d5a306e5c363fdac781b",
    measurementId: "G-GTZTZMN8CT"
})

const initMessaging = firebase.messaging()