function add_user(){
   var username=document.getElementById("username_id").value;
localStorage.setItem("name",username);
window.location="room.html";

}