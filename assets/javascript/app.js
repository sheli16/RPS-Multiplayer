$(document).ready(function() {
console.log("ready!");
  
//firebase reference
var ontherocks = new Firebase('https://game-rps.firebaseio.com'); 
console.log("we made it this far!")

var user1name = "";
var user2name = "";

$("#adduser").on("click", function(){

//var user1name = $("#nameinput").val().trim();
if (user1name == ""){
 user1name = $("#player-name").val().trim();
ontherocks.push(players);
}
else
{
 user2name = $("#player-name").val().trim();
ontherocks.push(players);
}//});
//ontherocks.push(players);

//Game players 
var players = 
{
  user1:
  [
    {
        name: user1name,
        choice: 'user1choice',
        wins: 'user1wins',
        loses: 'user1losses',
    },
  ],

  user2:
  [
    {
        name: user2name,
        choice: 'user2choice',
        wins: 'user2wins',
        loses: 'user2losses',
    }
  ]
}

//console.log(players);
console.log(user1name);
console.log(user2name + "second name");
//console.log(players.user2);

ontherocks.update(players);
// Prevents moving to new page
 return false;
});

});