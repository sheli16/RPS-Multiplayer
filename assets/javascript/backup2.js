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


var players = 
{
  user1:
  [
    {
        name: user1name,
        choice: user1choice,
        wins: user1wins,
        loses: user1losses,
    },
  ],

  user2:
  [
    {
        name: user2name,
        choice: user2choice,
        wins: user2wins,
        loses: user2losses,
    }
  ]
}

ontherocks.set(players);


$("#adduser").on("click", function(){

//var user1name = $("#nameinput").val().trim();
if (user1name == ""){
 user1name = $("#player-name").val().trim();
ontherocks.push(user1.name);
//update and display html
//$("#player1name").html('<h2>'user1name'</h2>');
}

else

{
 user2name = $("#player-name").val().trim();
//ontherocks.push(players);
}//});
ontherocks.update(players);
console.log(user1name);
console.log(user2name + "second name");
// Prevents moving to new page
 return false;
});


ontherocks.on("value", function(snapshot) {

 // Log everything that's coming out of snapshot
 console.log(snapshot.val());
  console.log(snapshot.val().user1.name);
  console.log(snapshot.val().user2.name);
  

  // Change the HTML to reflect
  $("#player1name").html(snapshot.val().user1name);
  $("#player2name").html(snapshot.val().user2name);
 

// Handle the errors
}, function(errorObject){

 console.log("The read failed: " + errorObject.code)

})

});