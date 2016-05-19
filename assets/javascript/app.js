$(document).ready(function() {
console.log("ready!");
  
//firebase reference
var ontherocks = new Firebase('https://game-rps.firebaseio.com'); 
console.log("we made it this far!")

var user1name = "";
var user2name = "";
var user1choice = "";
var user2choice = "";
var user1wins = 0;
var user2wins = 0;
var user1losses = 0;
var user2losses = 0;

 //var players = 
//{
 // user1:
  
   // {
     //   name: user1name,
       // choice: user1choice,
       // wins: user1wins,
       // loses: user1losses,
   // },
  

  //user2:
 
   // {
     //   name: user2name,
      //  choice: user2choice,
       // wins: user2wins,
      //  loses: user2losses,
   // }
 
//}



//ontherocks.set(players);


$("#adduser").on("click", function(){
  
 var players = 
{
  user1:
  
    {
        name: user1name,
        choice: user1choice,
        wins: user1wins,
        loses: user1losses,
    },
  

  user2:
 
    {
        name: user2name,
        choice: user2choice,
        wins: user2wins,
        loses: user2losses,
    }
 
}

//var user1name = $("#nameinput").val().trim();
if (user1name == ""){
 user1name = $("#player-name").val().trim();
ontherocks.set(players);
//update and display html
//$("#player1name").html('<h2>'user1name'</h2>');
}

else

{
 user2name = $("#player-name").val().trim();
 ontherocks.set(players);
//ontherocks.push(players);
}//});

console.log(user1name);
console.log(user2name + "second name");
// Prevents moving to new page
ontherocks.set(players);
 return false;
});

ontherocks.on("value", function(snapshot) {
// Log everything that's coming out of snapshot
 console.log(snapshot.val());
  console.log(snapshot.val().user1.name);
  console.log(snapshot.val().user2.name);
  // Change the HTML to reflect
  $("#player1name").html(snapshot.val().user1.name+" Player 1");
  $("#player2name").html(snapshot.val().user2.name+" Player 2");
  return false;
// Handle the errors
}, function(errorObject){

 console.log("The read failed: " + errorObject.code)
 });


$("#user1rocks").on("click", function(){
if (user1choice == "")
user1choice = "on the Rocks"
});

$("#user1paper").on("click", function(){
if (user1choice == "")
user1choice = "In paper"
});

$("#user1spritzer").on("click", function(){
if (user1choice == "")
user1choice = "with Spritzer"
});

$("#user2rocks").on("click", function(){
if (user1choice == "")
user2choice = "on the Rocks"
});

$("#user2paper").on("click", function(){
if (user1choice == "")
user2choice = "in Paper"
});

$("#user2spritzer").on("click", function(){
user2choice = "with Spritzer"
//ontherocks.set(players);
ontherocks.on("value", function(snapshot) {
// Log everything that's coming out of snapshot
 console.log(snapshot.val());
  console.log(snapshot.val().user1);
  console.log(snapshot.val().user2.choice);
  // Change the HTML to reflect
  $("#choices2").val("");
$("#choices2").html(snapshot.val().user2.choice + "with sprtizer")
  return false;
// Handle the errors
}, function(errorObject){

 console.log("The read failed: " + errorObject.code)
 });


});

});  

