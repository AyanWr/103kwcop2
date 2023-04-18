const firebaseConfig = {
    apiKey: "AIzaSyCL1E28kb3OoaMDSZqXHaRzamro1r7HCBk",
    authDomain: "practice-ab8b6.firebaseapp.com",
    databaseURL: "https://practice-ab8b6-default-rtdb.firebaseio.com",
    projectId: "practice-ab8b6",
    storageBucket: "practice-ab8b6.appspot.com",
    messagingSenderId: "447497038310",
    appId: "1:447497038310:web:3fb092c7715a10fdbb0e27"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose:"adduser"
    });
}