 
$(document).ready(function(){
  
  //Array of rows
  var rememberObj = [
    {
      time: "9",
      reminder : " "
    },
    {
      time: "10",
      reminder : " "
    },
    {
      time: "11",
      reminder : " "
    },
    {
      time: "12",
      reminder : " "
    },
    {
      time: "13",
      reminder : " "
    },
    {
      time: "14",
      reminder : " "
    },
    {
      time: "15",
      reminder : " "
    },
    {
      time: "16",
      reminder : " "
    },
    {
      time: "17",
      reminder : " "
    }
  ];

    renderDisplay();
 
  //Updates clock every second
    var updateTime = function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, hh:mm:ss a'));
    
    }
    setInterval(updateTime, 1000);

    //Update screen every minute
    var updateScreen = function() {
      renderDisplay();
    }
    setInterval(updateScreen, 60000);
var currentDay;

function renderDisplay() {

  //Create variable for current hour
  var currentHour = moment().format('H');
  currentDay = (moment().format('MMMM Do YYYY'));

  //Retrieve storage when page refreshes if events have been input.
  if (localStorage.getItem(currentDay) !== null) {
  rememberObj = JSON.parse(localStorage.getItem(currentDay));
  }

    //Empty container each time it renders so you only have one set of rows.
    $(".container").empty();

  //Loop to add all rows in array
  for (var i=0; i< rememberObj.length; i++) {

    //Row created and added to container
    var rowX = $("<div>");
    rowX.addClass("row");
    $(".container").append(rowX);

    // 1st Column added to row
    var timeBlock = $("<div>");
    timeBlock.addClass("col-md-1 hour");
    $(rowX).append(timeBlock);

    //Because time is in 24 hour format so it is easier to do before and after. Change so what the user sees is more user friendly eg 1pm instead of 13.
    var displayHour;
    //So the displayed hours are not in 24 hour time
    if(rememberObj[i].time > 12) {
      displayHour = (rememberObj[i].time - 12) + "pm";
    }else if(parseInt(rememberObj[i].time) === 12){
      displayHour = rememberObj[i].time + "pm"; 
    }else {
      displayHour = rememberObj[i].time + "am";
      }
      
      timeBlock.text(displayHour);

    //2nd column added to row
    var eventDiv = $("<div>");
    eventDiv.addClass("col-md-10");
    $(rowX).append(eventDiv);

    //text area added to second column
    var textArea = $("<textarea>");
    textArea.text(rememberObj[i].reminder);
    $(eventDiv).append(textArea);

    //Third Column for save button added
    var buttonDiv = $("<div>");
    buttonDiv.addClass("col-md-1 saveBtn");
    $(rowX).append(buttonDiv);
    var icon = $("<i>");
    icon.addClass("fas fa-save");
    $(buttonDiv).append(icon);

    //Creating event listener with some arguments
    $(buttonDiv).on("click", {
      inTimeBlock: displayHour,
      rowNumber: i,
      textAreaEl: textArea,
    }, rowClicked );
    
    //Setting classes for past, present and future events
    if(parseInt(currentHour) === parseInt(rememberObj[i].time)){
      eventDiv.addClass("present");

    }else if(parseInt(currentHour) > parseInt(rememberObj[i].time)){
      eventDiv.addClass("past");
    }else{
      eventDiv.addClass("future");
    }
  }
}

//When save button is clicked the text input in text area is saved to local storage and then call renderDisplay() to update screen.
function rowClicked(event) {
  var reminderTextInput = $(event.data.textAreaEl);
  rememberObj[event.data.rowNumber].reminder = reminderTextInput[0].value;
  localStorage.setItem(currentDay, JSON.stringify(rememberObj));
  
  renderDisplay();
  
} 

});



