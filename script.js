$(document).ready(function(){

    var currentDay = $("#currentDay");
    var update = function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
  }
    
    setInterval(update, 1000);

  });