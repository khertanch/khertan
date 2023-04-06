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
//ADD YOUR FIREBASE LI
us_name=localStorage.getItem("User_Name");
document.getElementById("User_name").innerHTML="Welcome "+us_name+"!";

function addroom(){
      r_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(r_name).update({
            purpose:"adding user name"
      });

      localStorage.setItem("ROOM_NAME",r_name);
      window.location("kwitter_page.html");
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
room="<div class='room_name' id="+Room_names+" onclick='directto(this.id)'>#"+Room_names+" </div><hr>";
document.getElementById("output").innerHTML+=room;
      //End code
      });});}
getData();

function directto(name){
      console.log(name);
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html";
}
