  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getDatabase, get, set, ref, onValue } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyANbmF0TO_-YIjplo3lxZdSCOmDrDZXFzY",
    authDomain: "sastrameela.firebaseapp.com",
    databaseURL: "https://sastrameela-default-rtdb.firebaseio.com",
    projectId: "sastrameela",
    storageBucket: "sastrameela.appspot.com",
    messagingSenderId: "456895542531",
    appId: "1:456895542531:web:b748f92eb7f56864676536",
    measurementId: "G-5ZKP0CFLN2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getDatabase(app);

  const temperature = ref(db, 'temperature');
  const quality = ref(db, 'airquality');

const connectedRef = ref(db, ".info/connected");
onValue(connectedRef, (snap) => {
  if (snap.val() === true) {
    console.log("connected");
  } else {
    console.log("not connected");
  }
});

onValue(temperature, (snapshot) => {
  const data = snapshot.val();
  const dataContainer = document.getElementById('esp-temp');
  dataContainer.innerHTML = JSON.stringify(data, null, 2); // Format and display data
});
onValue(quality, (snapshot) => {
  const data = snapshot.val();
  const dataContainer = document.getElementById('esp-quality');
  dataContainer.innerHTML = JSON.stringify(data, null, 2); // Format and display data
});
onValue(level, (snapshot) => {
  const data = snapshot.val();
  const dataContainer = document.getElementById('esp-level');
  dataContainer.innerHTML = JSON.stringify(data, null, 2); // Format and display data
});
onValue(status, (snapshot) => {
  const data = snapshot.val();
  const dataContainer = document.getElementById('esp-status');
  dataContainer.innerHTML = JSON.stringify(data, null, 2); // Format and display data
});
