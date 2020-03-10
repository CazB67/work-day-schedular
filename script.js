 
$(document).ready(function(){

  //Create variable for current hour
 var currentHour = moment().format('H');
 console.log("The current hour is " + currentHour);


 
 
    var update = function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, hh:mm:ss a'));
    
    }
    
    setInterval(update, 1000);



var hours = ["9", "10", "11", "12", "13", "14", "15", "16","17"];

for (var i=0; i< hours.length; i++) {

  var rowX = $("<div>");
  rowX.addClass("row");
  $(".container").append(rowX);

  var timeBlock = $("<div>");
  timeBlock.addClass("col-md-1 hour");
  $(rowX).append(timeBlock);
  
  var displayHour;
  
  if(hours[i] > 12) {
    displayHour = (hours[i] - 12) + "pm";
  }else if(parseInt(hours[i]) === 12){
    displayHour = hours[i] + "pm"; 
  }else {
    displayHour = hours[i] + "am";
    }
    
    timeBlock.text(displayHour);

  var eventDiv = $("<div>");
  eventDiv.addClass("col-md-10");
  $(rowX).append(eventDiv);
  
  $(eventDiv).append("<textarea>");

  var buttonDiv = $("<div>");
  buttonDiv.addClass("col-md-1 saveBtn");
  $(rowX).append(buttonDiv);
//Tester
//currentHour = 13;
  if(parseInt(currentHour) === parseInt(hours[i])){
    eventDiv.addClass("present");

  }else if(parseInt(currentHour) > parseInt(hours[i])){
    eventDiv.addClass("past");
  }else{
    eventDiv.addClass("future");
    console.log(currentHour + " current hour");

console.log(hours[i] + " index");
  }


  

}


    





















  });



