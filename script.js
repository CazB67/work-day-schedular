 
$(document).ready(function(){

  //Create variable for current hour
 var currentHour = moment().format('h');
 console.log("The current hour is " + currentHour);


 
 
    var update = function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
    }
    
    setInterval(update, 1000);

var hours = ["9", "10", "11", "12", "1", "2", "3", "4","5"];

for (var i=0; i< hours.length; i++) {

  var rowX = $("<div>");
  rowX.addClass("row");
  $(".container").append(rowX);

  var timeBlock = $("<div>");
  timeBlock.addClass("col-md-1 hour");
  $(rowX).append(timeBlock);
  timeBlock.text(hours[i]);

  var eventDiv = $("<div>");
  eventDiv.addClass("col-md-10");
  $(rowX).append(eventDiv);
  
  $(eventDiv).append("<textarea>");

  var buttonDiv = $("<div>");
  buttonDiv.addClass("col-md-1 saveBtn");
  $(rowX).append(buttonDiv);

  
  //Add text area to the timeblocks
 
  /*
  <!--<div class = "row">
  <div class = "col-md-1 hour">9am</div>
  <div class = "col-md-10"></div>
  <div class = "col-md-1 saveBtn"></div>
</div>-->
*/

}


    





















  });



