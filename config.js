  import firebase from 'firebase'
  var firebaseConfig = {
    databaseURL:"https://my-whatsapp-fd8fc-default-rtdb.firebaseio.com/",
    apiKey: "AIzaSyDK6nFkzMBMrEboZ9-Y_HU2s4y_ajjVjJ4",
    authDomain: "my-whatsapp-fd8fc.firebaseapp.com",
    projectId: "my-whatsapp-fd8fc",
    storageBucket: "my-whatsapp-fd8fc.appspot.com",
    messagingSenderId: "955863300419",
    appId: "1:955863300419:web:a8396c2e8062c7096ad7f6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.database();