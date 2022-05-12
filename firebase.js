// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD31C9ZWZSPt0u_q4PDKPycY_2e0J0czb4",
  authDomain: "messagebox-8bd1f.firebaseapp.com",
  databaseURL: "https://messagebox-8bd1f-default-rtdb.firebaseio.com",
  projectId: "messagebox-8bd1f",
  storageBucket: "messagebox-8bd1f.appspot.com",
  messagingSenderId: "1055622673199",
  appId: "1:1055622673199:web:29da6aa72c3ec952cee7da",
  measurementId: "G-SDNE7NFRX5"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 username=localStorage.getItem("name");
 document.getElementById("username").innerHTML="Welcome "+username+"!";
  function Add_Room(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"Adding Room Name"
      });
      localStorage.setItem("Room",room_name);
      window.location="page.html";
  }

  function getData() {
       firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = ""; 
            snapshot.forEach(function(childSnapshot) {
                 childKey = childSnapshot.key; 
                 Room_names = childKey; 
                 console.log("Room Name - " + Room_names);
                  //<div id="Room_names"> # Room names </div> <hr> 
                  row="<div class='room_name' id='"+Room_names+"' onclick='chating_room(this.id)'>"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML+=row;
                }); }); }

                getData();
                function chating_room(name){
                    localStorage.setItem("Room",name);
                    window.location="page.html"
                }

                 function logout(){
                     localStorage.removeItem("name");
                     localStorage.removeItem("Room");
                     window.location="index.html"
                     
                 }