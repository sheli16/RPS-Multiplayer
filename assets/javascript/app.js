$(document).ready(function() {


    console.log("ready!");
   // computernumber();
   // crystalNumbers();

//function computernumber = Math.floor((Math.random() * 100) + 19;
    var Trivia = [];
    Trivia[0]= "In 1973 this singer had one of Discos earliest hits";
    Trivia[1]= "In 1975 Harold Melivin and the Blue notes had this hit";
    Trivia[2]= "In 1975 'What am I going to do with you' became this singers big hits"; 
    Trivia[3]= "Night Fever sung by this group became an all time hit in 1977";
    Trivia[4]= "Donna Summer had many hits, but this one would leave you on the dance Floor";
   // a1: "Don Downing",
    //a2: "The Love I lost",
    //a3: "Barry White", 
    //a4: "Bee Gees",
    //a5: "Last Dance" 
    console.log(Trivia[4]);
    
   // var answers = [
   //["Don Downing", "Michael Jackson", "Frank Sinatra", "Sylverster"],
    //["The Love I lost", "a", "b", "c"],
    //["Barry White", "a", "b", "c"],
    //["Bee Gees","a", "b", "c"],
    //["Last Dance","a", "b", "c"]];
   
    
    var wronganswers = [10]; 
    wronganswers[0] ="Michael Jackson";
    wronganswers[1] ="Janet Jackson";
    wronganswers[2] ="Donald Trump";
    wronganswers[3] ="Kiss";
    wronganswers[4] ="Queen";
    wronganswers[5] ="Cool and the Gang";
    wronganswers[6] ="Gloria Gaynor";
    wronganswers[7] ="Daffy Duck";
    wronganswers[8] ="Luke Skywalker";
    wronganswers[9] ="Mr Roper";

var correctanswer = 0
var badanswer = "Wrong! The correct answer is:  "

 var rightanswers = [5];
    rightanswers[0] ="Don Downing";
    rightanswers[1] ="The Love I lost";
    rightanswers[2] ="Barry White";
    rightanswers[3] ="Bee Gees";
    rightanswers[4] ="Last Dance";


   
$('#start').on('click', function() {
  console.log("works");
   triviaquestions();
 });

function triviaquestions() {
  var min = 0
  var max = 4 
  var number = Math.floor(Math.random()*(max-min+1)+min);
  var randomquestions = Trivia[number];
    console.log(randomquestions);
    $('#Questions').html('<h4>'+ randomquestions +'</h4>');

  function gotitright(){
$("#score").html('<h6>' +'yeah! '+ correctanswer +'</h6>');
}
function gotitWrong(){
$("#score").html('<h6>'+ badanswer+ '  '+ correctanswer +'</h6>');
}



  console.log(number);
  number = 0;
if (number === 0 ){
correctanswer = rightanswers[0]
  $("#1q").html('<li><p>'+ correctanswer +'</p></li>');
  $("#2q").html('<li><p>'+ wronganswers[2]  +'</p></li>');
  $("#3q").html('<li><p>'+ wronganswers[3]  +'</p></li>');
  $("#4q").html('<li><p>'+ wronganswers[4]  +'</p></li>');

$("#1q").on('click', function(){
  gotitright();
 clearInterval(interval);
 questiondelay();
 triviaquestions();
});
$("#2q, #3q, #4q").on('click', function(){
  gotitWrong();
  clearInterval(interval);
  (delaytimer);
  triviaquestions();
});
  };
  
  if (number === 1){
    correctanswer = rightanswers[1]
  $("#1q").html('<li><p>'+ wronganswers[5]  +'</p></li>');
  $("#2q").html('<li><p>'+ wronganswers[6]  +'</p></li>');
  $("#3q").html('<li><p>'+ rightanswers[1]  +'</p></li>');
  $("#4q").html('<li><p>'+ wronganswers[7]  +'</p></li>');
  
  $("#3q").on('click', function(){
  gotitright();
});
$("#1q, #2q, #4q").on('click', function(){
  gotitWrong();
});
  };
 if (number === 2){
  correctanswer = rightanswers[2]
  $("#1q").html('<li><p>'+ wronganswers[5]  +'</p></li>');
  $("#2q").html('<li><p>'+ wronganswers[6]  +'</p></li>');
  $("#3q").html('<li><p>'+ rightanswers[2]  +'</p></li>');
  $("#4q").html('<li><p>'+ wronganswers[7]  +'</p></li>');
  
  $("#3q").on('click', function(){
  gotitright();
});
$("#1q, #2q, #4q").on('click', function(){
  gotitWrong();
});
  };
  if (number === 3){
    correctanswer = rightanswers[4]
  $("#1q").html('<li><p>'+ wronganswers[5] +'</p></li>');
  $("#2q").html('<li><p>'+ wronganswers[6] +'</p></li>');
  $("#3q").html('<li><p>'+ rightanswers[3] +'</p></li>');
  $("#4q").html('<li><p>'+ wronganswers[7] +'</p></li>');
  
  $("#3q").on('click', function(){
  gotitright();

});
$("#1q, #2q, #4q").on('click', function(){
  gotitWrong();
});
  };
if (number === 4){
  correctanswer = rightanswers[4]
  $("#1q").html('<li><p>'+ wronganswers[5] +'</p></li>');
  $("#2q").html('<li><p>'+ rightanswers[4] +'</p></li>');
  $("#3q").html('<li><p>'+ wronganswers[6] +'</p></li>');
  $("#4q").html('<li><p>'+ wronganswers[7] +'</p></li>');
  
  $("#2q").on('click', function(){
  gotitright();
});
$("#1q, #3q, #4q").on('click', function(){
  gotitWrong();
});
  };
if (number === 5){
    correctanswer = rightanswers[5]
  $("#1q").html('<li><p>'+ wronganswers[5] +'</p></li>');
  $("#2q").html('<li><p>'+ wronganswers[6] +'</p></li>');
  $("#3q").html('<li><p>'+ wronganswers[7] +'</p></li>');
  $("#4q").html('<li><p>'+ rightanswers[5] +'</p></li>');
  
  $("#4q").on('click', function(){
  gotitright();
});
$("#2q, #3q, #1q").on('click', function(){
  gotitWrong();
});
  };

//var myVar = setInterval(myTimer, 1000);

//function myTimer() {
   // var d = new Date();
    //document.getElementById("clock").innerHTML = d.toLocaleTimeString();
//}
var counter = 0;
var interval = setInterval(function() {
    counter++;
    document.getElementById("clock").innerHTML= counter;
    // Display 'counter' wherever you want to display it.
    if (counter == 10) {
        // Display a login box
        clearInterval(interval);
    }
}, 1000);


var counter2 = 0;
var delaytimer = setInterval(function() {
    counter2++;
        // Display 'counter' wherever you want to display it.
    if (counter2 == 3) {
        // Display a login box
        clearInterval(delaytimer);
    }
}, 1000);
};
});





//if number = 2
   //$("#1q").html('<li><p>'+ answers[1]  +'</p></li>');
   // console.log(answers[number,1]);
  //  console.log(number);

    //if number = 1
  

   //$("#1q").html('<li><p>'+ answers[1]  +'</p></li>');
    //console.log(answers[number,1]);
    //console.log(number);
     
     //$("#2q").html('<li><p>'+ answers[number,1] +'</p></li>');
    //console.log(answers[number,1]);
     // console.log(number);
     // $("#3q").html('<li><p>'+ answers[number,2] +'</p></li>');
    //console.log(answers[number,2]);   
      
    //$("#4q").html('<li><p>'+ answers[number,3] +'</p></li>');
   // console.log(answers[number,3]);

//$('#1q').on('click', function() {
 // console.log("works");
 




















//function stop(){
//   console.log('stopping');
//   clearInterval(counter);
// }
//
// function recordLap(){
//   var converted = timeConverter(time);
//   $('#laps').append('<p>Lap ' + lap + ' : ' + converted + '</p>');
//   lap++;
// }
//
// function count(){
//   time++;
//   var converted = timeConverter(time);
//   $('#display').html(converted);
// }
//
// function timeConverter(t){
//   var minutes = Math.floor(t/60);
//   var seconds = t - (minutes * 60);
//   if (seconds < 10){
//     seconds = "0" + seconds;
//   }
//   if (minutes === 0){
//     minutes = "00";
//   } else if (minutes < 10){
//     minutes = "0" + minutes;
//   }
//   return minutes + ":" + seconds;
// }




