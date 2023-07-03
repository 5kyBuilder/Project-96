document.getElementById("userD").textContent = "Welcome " + localStorage.getItem("username") + "!";

const firebaseConfig = {
      apiKey: "AIzaSyARKQLyb8ADFR-tZWZ6VEJv5e9dC6IQu6w",
      authDomain: "letschat-9b3f2.firebaseapp.com",
      projectId: "letschat-9b3f2",
      storageBucket: "letschat-9b3f2.appspot.com",
      messagingSenderId: "391116766804",
      appId: "1:391116766804:web:0cffcea6b29df8f0a2b7c1"
    };
    
    // Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("roomname").value;
  
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name" 
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room names - " + Room_names);
       row = "<div class='room_names' id='"+Room_names+"' onclick='redirectToRoom(this.id);'>#"+Room_names+"</div><hr>";
       document.getElementById("output").value += row;
      });
    });
  }
getData();

function redirectToRoom(name)
{
  console.log("going to room name - " + name);
  localStorage.setItem("room_name", name);

  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}