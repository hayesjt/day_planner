//DAILY PLANNER - JAVASCRIPT//

//VARS//
//var dateTime = new Date();
var saveBtn = $(".save-btn");
var dateSpc = $(".date-box")
var textBox = $(".discription")


//DISPLAY DATE ON RIGHT TOP CORNER//
    //document.getElementById("real-time").innerHTML = dateTime.toDateString();
$("#real-time").text(moment().format("dddd" + " - " + "MMM Do YY"))

//SAVE TEXT IN FORM TO LOCAL STORAGE//
saveBtn.on("click", function() {
      //console.log("clicked!");
  var value = $(this).siblings(textBox).val();
  var time = $(this).parent().attr("id");
      //console.log(time);
     //console.log(value);
  localStorage.setItem(time, value);
});

//CLASS CHANGES BASED ON TIME//
function hourUpdater() {
  var currentHour = moment().hours();
    //console.log(currentHour);
  $(".time-block").each(function(){
      //var blockHour = parseInt($(this).attr("id").split("-")[1])\
    var blockHour = parseInt($(this).attr("id"));
      //console.log(blockHour);
    if (blockHour < currentHour){
      textBox.addClass("past-time");
    }
    
    else if (blockHour > currentHour){
      textBox.addClass("future-time");
    }

    else {
      textBox.addClass("now-time");
    }
  })
}

hourUpdater();