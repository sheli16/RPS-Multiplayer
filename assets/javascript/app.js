$(document).ready(function() {
console.log("ready!");
  
//firebase reference
var ontherocks = new Firebase('https://game-rps.firebaseio.com'); 
console.log("we made it this far!")

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

console.log(players.user2);
ontherocks.push(players);


$("#submit").on("click", function(){
//var user1name = $("#nameinput").val().trim();
if (user1name === "")
  user1name = $("#nameInput").val().trim();

if (user1name == "")
  user2name = $("#nameInput").val().trim();
});
console.log(players);
ontherocks.update(players);

});