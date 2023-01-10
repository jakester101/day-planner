
$(function () {

  //clicking the save button gets the data from the text area and saves it into storage
  $( ".btn" ).on( "click", function() {
    var id = $(this).parent().attr('id');
    var text = $('#' + id).children('textarea').val();
    localStorage.setItem(id, JSON.stringify(text));

  });
//retrieves local data and adds the value back to appropriate text area
  function getData(){
      for (var i=9; i < 13; i++){

        var hour = 'hour-' + i;
        var storedData = JSON.parse(localStorage.getItem(hour));
        if(storedData !== null){
          ($('#' + hour).children('textarea').val(storedData));
        }
      }

      for (var i=1; i < 6; i++){

        var hour = 'hour-' + i;
        var storedData = JSON.parse(localStorage.getItem(hour));
        if(storedData !== null){
          ($('#' + hour).children('textarea').val(storedData));
        }
      }
  }



  //get todays date and time using Day.js API
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  getData();

    //setColor contains all logic that sets the box color class based upon the time
  function setColor(){
    var currentHour = today.format('h');
    var amOrPM = today.format('A');
    console.log(amOrPM);
    for(var i = 9; i < 12; i++ ){
      var hour = 'hour-' + i;
      if(currentHour === 12 && amOrPM === 'AM'){
        $('#' + hour).addClass('future');
      }
      else if(currentHour < i && amOrPM === 'AM'){
        //set all text box class to green
        $('#' + hour).addClass('future');

      } else if(currentHour === i && amOrPM === 'AM'){
        //set all text box classes to red
        $('#' + hour).addClass('present');

      } else if (currentHour > i && amOrPM === 'AM'){
        //set all text box classes to gray
        $('#' + hour).addClass('past');
      } else{
        $('#' + hour).addClass('past');
      }
    }

      //time changes to PM at 12 wwhich is inconvient for the loop
      //so just do it by itself
      var hour = 'hour-' + 12;
      if(currentHour > i && amOrPM === 'PM'){
        //set all text box class to green
        $('#' + hour).addClass('future');

      } else if(currentHour === i && amOrPM === 'PM'){
        //set all text box classes to red
        $('#' + hour).addClass('present');

      } else if (currentHour < i && amOrPM === 'PM'){
        //set all text box classes to gray
        $('#' + hour).addClass('past');
      } else if(amOrPM === "AM"){
        $('#' + hour).addClass('future');
      } else{
        $('#' + hour).addClass('past');
      }

    for(var i = 1; i < 6; i++ ){
      var hour = 'hour-' + i;
      if(currentHour === 12 && amOrPM === 'PM'){
        $('#' + hour).addClass('future');
      }
      else if(currentHour < i && amOrPM === 'PM'){
        //set all text box class to green
        $('#' + hour).addClass('future');

      } else if(currentHour === i && amOrPM === 'PM'){
        //set all text box classes to red
        $('#' + hour).addClass('present');

      } else if (currentHour > i && amOrPM === 'PM' && currentHour !== 12){
        //set all text box classes to gray
        $('#' + hour).addClass('past');
      } else if(amOrPM === "AM"){
        $('#' + hour).addClass('future');
      } else{
        $('#' + hour).addClass('past');
      }
    }
  }

  setColor();


});
