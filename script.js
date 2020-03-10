 
$(document).ready(function(){

  //Create variable for current hour
 var currentHour = moment().format('H');
 console.log("The current hour is " + currentHour);


 
  //Updates clock every second
    var update = function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, hh:mm:ss a'));
    
    }
    
    setInterval(update, 1000);


//Array of hours
var hours = ["9", "10", "11", "12", "13", "14", "15", "16","17"];

for (var i=0; i< hours.length; i++) {

  //Row created and added to container
  var rowX = $("<div>");
  rowX.addClass("row");
  $(".container").append(rowX);

  //Column added to row
  var timeBlock = $("<div>");
  timeBlock.addClass("col-md-1 hour");
  $(rowX).append(timeBlock);
  
  var displayHour;
  //So the displayed hours are not in 24 hour time
  if(hours[i] > 12) {
    displayHour = (hours[i] - 12) + "pm";
  }else if(parseInt(hours[i]) === 12){
    displayHour = hours[i] + "pm"; 
  }else {
    displayHour = hours[i] + "am";
    }
    
    timeBlock.text(displayHour);

  //column added to row
  var eventDiv = $("<div>");
  eventDiv.addClass("col-md-10");
  $(rowX).append(eventDiv);

  //text area added
  $(eventDiv).append("<textarea>");

  //Column for save button added
  var buttonDiv = $("<div>");
  buttonDiv.addClass("col-md-1 saveBtn");
  $(rowX).append(buttonDiv);
//Tester
//currentHour = 13;
  //Setting classes for past, present and future events
  if(parseInt(currentHour) === parseInt(hours[i])){
    eventDiv.addClass("present");

  }else if(parseInt(currentHour) > parseInt(hours[i])){
    eventDiv.addClass("past");
  }else{
    eventDiv.addClass("future");
    
  }

 
  

}


    





















  });



