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
   room_name=localStorage.getItem("Room");
   function send() {
       Message=document.getElementById("message_input").value;
       firebase.database().ref(room_name).push({
           name:username,
           message:Message,
           likes:0
       });
       document.getElementById("message_input").value="";
   }
   function getData() {
        firebase.database().ref("/"+room_name).on('value', function(snapshot) {
             document.getElementById("output").innerHTML = "";
              snapshot.forEach(function(childSnapshot) 
              { childKey = childSnapshot.key; 
                childData = childSnapshot.val(); 
                if(childKey != "purpose")
                 { firebase_message_id = childKey; 
                    message_data = childData; 
                    //Start code
                    name=message_data["name"];
                    message=message_data["message"];
                    likes=message_data["likes"];
                    name_item="<h4>"+name+"<img id='tic_Img' src='https://png2.cleanpng.com/sh/fb57caf0efb3a618e86cc738e1a84fd5/L0KzQYm3VsEyN5DtiZH0aYP2gLBuTgNwa5pmhJ92ZXTscX7wjwN1aZh3ed82dnX1ebfwhfQuapJpf9c2c4nwcrFzTfNwdaF6RadrMXXodLO8hPE1OZY3RqMBMEC8QoG8UcUzQGg6S6cDOUi8RHB3jvc=/kisspng-social-media-instagram-verified-badge-symbol-compu-5b1eedb5da41e2.160092051528753589894.png'></h4>";
                    message_item="<h4>"+message+"</h4>";
                    button_item="<button class='like_btn' id='"+firebase_message_id+"' value="+likes+" onclick='new_likes(this.id)'>";
                    span_item="<span class='glyphicon glyphicon-thumbs-up'>likes: "+likes+"</span></button><hr>";
                    row=name_item+message_item+button_item+span_item;
                    document.getElementById("output").innerHTML+=row;
    //End code
 } }); }); } getData();
 function new_likes(message_id) {
     button_id=message_id;
     new_like=document.getElementById(button_id).value;
     number_of_likes=Number(new_like)+1;
     firebase.database().ref(room_name).child(message_id).update({
         likes:number_of_likes
     });
 }
 function logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("Room");
    window.location="index.html"
    
}