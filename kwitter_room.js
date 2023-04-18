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
//ADD
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name + "!";

function addroom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: " adding room name"
      });
}

localStorage.setItem("room_name",room_name);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",room_name);
      window.location = "message.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
