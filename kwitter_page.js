//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDzYEvZWSGriSz3EQ0SA4oGOjyfGO-NwIE",
      authDomain: "kwitter-97e2d.firebaseapp.com",
      databaseURL: "https://kwitter-97e2d-default-rtdb.firebaseio.com",
      projectId: "kwitter-97e2d",
      storageBucket: "kwitter-97e2d.appspot.com",
      messagingSenderId: "582596256350",
      appId: "1:582596256350:web:fbf06ea252043b848c0acf",
      measurementId: "G-3HVN6SBF10"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
 name=message_data['name'];
 message=message_data['message'];
 like=message_data['like'];
 name_with_tag="<h4> + name + <img class='user_tick' src='tick.png' </h4>";
 
//End code
      } });  }); }
getData();
