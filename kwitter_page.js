const firebaseConfig = {
    apiKey: "AIzaSyALcqBsYFR31abvNiYcEGrR95N-N0te0tU",
    authDomain: "kwitter-database-a59b1.firebaseapp.com",
    databaseURL: "https://kwitter-database-a59b1-default-rtdb.firebaseio.com",
    projectId: "kwitter-database-a59b1",
    storageBucket: "kwitter-database-a59b1.appspot.com",
    messagingSenderId: "1010213001179",
    appId: "1:1010213001179:web:c2af55efd9b1b98b5ab9fe"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("username")
  room_name = localStorage.getItem("room_name")
  
  function send()
  {
        msg = document.getElementById("msg").value;
        
        firebase.database().ref(room_name).push({
              name: user_name,
              message: msg,
              likes: 0
        });
  
        document.getElementById("msg").value = "";
  }
  
  function logout()
  {
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
  //Start code
  
  //End code
        } });  }); }
  getData();
  