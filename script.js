 
$(document).ready(function(){

  //Create variable for current hour
 var currentHour = moment().format('h');
 console.log(currentHour);
 //Add text area to the timeblocks
 var eventBlock =$(".col-md-10");
 $(eventBlock).append("<textarea>");
 var currentDay = $("#currentDay");

 var hourBlock = $(".hour");
 hourBlock = "";
 
    var update = function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
    }
    
    setInterval(update, 1000);


    function setTimeblocks() {
      
      if(currentHour === hourBlock.value){
        $(eventBlock).addClass("present");
        
    }
  }


    





















  });



