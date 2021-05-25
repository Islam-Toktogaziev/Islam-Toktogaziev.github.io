importScripts("https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.2/firebase-analytics.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.2/firebase-messaging.js");
//Using singleton breaks instantiating messaging()
// App firebase = FirebaseWeb.instance.app;


firebase.initializeApp({
  apiKey: "AIzaSyD4tdTuH5hCUHKOR5gfGGs3r06bSiie5gw",
    authDomain: "cms-neolabs-cfb67.firebaseapp.com",
    projectId: "cms-neolabs-cfb67",
    storageBucket: "cms-neolabs-cfb67.appspot.com",
    messagingSenderId: "688937240282",
    appId: "1:688937240282:web:a01c3a4cfdd4c7dd2847e3",
    measurementId: "G-QVCFLL52F6"
});
firebase.analytics();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
  .register("/firebase-messaging-sw.js")
  .then(function(registration) {
console.log("Registration successful, scope is:", registration.scope);
messaging.getToken({vapidKey: 'BFN3N44ZPDGqh7NKCsl_EVacJK_s91lHkSwjTNsNCmgHcVuC149OLmCJhSdJz7f-K-B_vhwdHsCl-o0KhWOoneE', serviceWorkerRegistration : registration })
.then((currentToken) => {
  if (currentToken) {
      alert(currentToken);
    console.log('current token for client: ', currentToken);

    // Track the token -> client mapping, by sending to backend server
    // show on the UI that permission is secured
  } else {
    console.log('No registration token available. Request permission to generate one.');

    // shows on the UI that permission is required 
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // catch error while creating client token
});  
})
.catch(function(err) {
console.log("Service worker registration failed, error:"  , err );
}); 
}