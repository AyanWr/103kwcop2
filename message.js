const firebaseConfig = {
    apiKey: "AIzaSyAMyBaWJgN9YkdZfCCfsMIQnL6qxsR-YtQ",
    authDomain: "kwitter-af77d.firebaseapp.com",
    databaseURL: "https://kwitter-af77d-default-rtdb.firebaseio.com",
    projectId: "kwitter-af77d",
    storageBucket: "kwitter-af77d.appspot.com",
    messagingSenderId: "529533288421",
    appId: "1:529533288421:web:a4da97ee2b506a9ffdf90c"
  };
  
 firebase.initializeApp(firebaseConfig);

 user_name= localStorage.getItem("user_name");
 room_name= localStorage.getItem("room_name");
 
 function send() {
    msg = document.getElementById("msg").value;

    firebase.database().ref(room_name).push({
        Name:user_name,
        message:msg,
        like:0
    });
 }

 function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
 } });  }); }
getData();

