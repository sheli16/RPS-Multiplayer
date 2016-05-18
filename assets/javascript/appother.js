$(document).ready(function() {
console.log("ready!");
  
// Running this should popup an alert with "banana".
var messagesRef = new Firebase('https://game-rps.firebaseio.com'); 
console.log("we made it this far!")
//Creating needed variables
  var i = 0

  var User1 = {
  name: 
  choice:
  wins:
  loses:
}
  
  var user2 = {
  name:
  choice:
  wins:
  loses:
}
 

$(".submit").on("click", function(){

   // Grabs user input
   var user1Name = $("#nameInput").val().trim();
   var user2Name = $("#nameinput").val().trim();

   if user2name
   


   var user2rocks = $("#user2rocks").val().trim();
   var user2paper = moment($("#user2paper").val().trim();
   var user2spritzer = $("#user2spritzer").val().trim();

   
   var user1rocks = $("#user2rocks").val().trim();
   var user1paper = moment($("#user2paper").val().trim()
   var user1spritzer = $("#user2spritzer").val().trim();

   // Creates local "temporary" object for holding employee data
   var user1= {
     name:  user1name,
     choice: rps,
     wins: 0,
    loses: 0,
   }
  var user2 = {
  name: user2name,
  choice: rps,
  wins: 0,
  loses: 0,
}}
  
}
   // Uploads employee data to the database
   employeeData.push(user1);
 
   // Logs everything to console
   console.log(user1.name);
   console.log(user1.role); 
   console.log(user1.start);
   console.log(user1.rate);
 
   // Alert
   alert("Employee successfully added");

  // Clears all of the text-boxes
  $("#employeeNameInput").val("");
 $("#roleInput").val("");
  $("#startInput").val("");
 $("#rateInput").val("");

 // Prevents moving to new page
  return false;
});





function updateDom(didUserWin){
    $('#winArea').empty();

    if (didUserWin === true){
      $('#winArea').append($('<p>').text('You won!!'));
      setGame();
      renderMatchingNumber();
    }else if(didUserWin === false) {
      $('#winArea').append($('<p>').text('You lost!!'));
      setGame();
      renderMatchingNumber();
    }

    var wSpan = $('<span>').text(wins);
    var lSpan = $('<span>').text(losses);

    var pWins = $('<p>').text('Wins: ');
    var pLosses = $('<p>').text('Losses: ');

    pWins.append(wSpan);
    pLosses.append(lSpan);

    $('#winArea').append(pWins);
    $('#winArea').append(pLosses);



<!-- CHAT JAVACRIPT -->
<script>
  // CREATE A REFERENCE TO FIREBASE
  var messagesRef = new Firebase('https://p8ktayvy4lr.firebaseio-demo.com/');

  // REGISTER DOM ELEMENTS
  var messageField = $('#messageInput');
  var nameField = $('#nameInput');
  var messageList = $('#example-messages');

  // LISTEN FOR KEYPRESS EVENT
  messageField.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var username = nameField.val();
      var message = messageField.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
      messagesRef.push({name:username, text:message});
      messageField.val('');
    }
  });

  // Add a callback that is triggered for each chat message.
  messagesRef.limitToLast(10).on('child_added', function (snapshot) {
    //GET DATA
    var data = snapshot.val();
    var username = data.name || "anonymous";
    var message = data.text;

    //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
    var messageElement = $("<li>");
    var nameElement = $("<strong class='example-chat-username'></strong>")
    nameElement.text(username);
    messageElement.text(message).prepend(nameElement);

    //ADD MESSAGE
    messageList.append(messageElement)

    //SCROLL TO BOTTOM OF MESSAGE LIST
    messageList[0].scrollTop = messageList[0].scrollHeight;
  });





function go() {
  var userId = prompt('Username?', 'Guest');
  // Consider adding '/<unique id>' if you have multiple games.
  var gameRef = new Firebase(GAME_LOCATION);
  assignPlayerNumberAndPlayGame(userId, gameRef);
};

// The maximum number of players.  If there are already 
// NUM_PLAYERS assigned, users won't be able to join the game.
var NUM_PLAYERS = 4;

// The root of your game data.
var GAME_LOCATION = 'https://SampleGame.firebaseIO-demo.com/';

// A location under GAME_LOCATION that will store the list of 
// players who have joined the game (up to MAX_PLAYERS).
var PLAYERS_LOCATION = 'player_list';

// A location under GAME_LOCATION that you will use to store data 
// for each player (their game state, etc.)
var PLAYER_DATA_LOCATION = 'player_data';


// Called after player assignment completes.
function playGame(myPlayerNumber, userId, justJoinedGame, gameRef) {
  var playerDataRef = gameRef.child(PLAYER_DATA_LOCATION).child(myPlayerNumber);
  alert('You are player number ' + myPlayerNumber + 
      '.  Your data will be located at ' + playerDataRef.toString());

  if (justJoinedGame) {
    alert('Doing first-time initialization of data.');
    playerDataRef.set({userId: userId, state: 'game state'});
  }
}

// Use transaction() to assign a player number, then call playGame().
function assignPlayerNumberAndPlayGame(userId, gameRef) {
  var playerListRef = gameRef.child(PLAYERS_LOCATION);
  var myPlayerNumber, alreadyInGame = false;

  playerListRef.transaction(function(playerList) {
    // Attempt to (re)join the given game. Notes:
    //
    // 1. Upon very first call, playerList will likely appear null (even if the
    // list isn't empty), since Firebase runs the update function optimistically
    // before it receives any data.
    // 2. The list is assumed not to have any gaps (once a player joins, they 
    // don't leave).
    // 3. Our update function sets some external variables but doesn't act on
    // them until the completion callback, since the update function may be
    // called multiple times with different data.
    if (playerList === null) {
      playerList = [];
    }

    for (var i = 0; i < playerList.length; i++) {
      if (playerList[i] === userId) {
        // Already seated so abort transaction to not unnecessarily update playerList.
        alreadyInGame = true;
        myPlayerNumber = i; // Tell completion callback which seat we have.
        return;
      }
    }

    if (i < NUM_PLAYERS) {
      // Empty seat is available so grab it and attempt to commit modified playerList.
      playerList[i] = userId;  // Reserve our seat.
      myPlayerNumber = i; // Tell completion callback which seat we reserved.
      return playerList;
    }

    // Abort transaction and tell completion callback we failed to join.
    myPlayerNumber = null;
  }, function (error, committed) {
    // Transaction has completed.  Check if it succeeded or we were already in
    // the game and so it was aborted.
    if (committed || alreadyInGame) {
      playGame(myPlayerNumber, userId, !alreadyInGame, gameRef);
    } else {
      alert('Game is full.  Can\'t join. :-(');
    }
  });
}