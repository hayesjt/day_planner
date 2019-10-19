//DAILY PLANNER - JAVASCRIPT//

//VARS//
//var dateTime = new Date();
var saveBtn = $(".save-btn");
var dateSpc = $(".date-box")
var textBox = $(".discription")

for (var i = 9; i < 18; i++) {
  if (localStorage.getItem("hour-" + i)) {
    $("#" + i).val(localStorage.getItem("hour-" + i))
  }
}

//DISPLAY DATE ON RIGHT TOP CORNER//
//document.getElementById("real-time").innerHTML = dateTime.toDateString();
$("#real-time").text(moment().format("dddd" + " - " + "MMM Do YY"))

//SAVE TEXT IN FORM TO LOCAL STORAGE//
saveBtn.on("click", function () {
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
  $(".time-block").each(function () {
    //var blockHour = parseInt($(this).attr("id").split("-")[1])\
    var blockHour = parseInt($(this).attr("id"));
    console.log(blockHour);
    console.log(currentHour);
    //console.log(blockHour);
    if (blockHour < currentHour) {
      $(this).addClass("past-time");
      console.log("got if")
    }

    else if (blockHour > currentHour) {
      $(this).addClass("future-time");
      console.log("got else if")
    }

    else {
      $(this).addClass("now-time");
      console.log("got else")
    }
  })
}

hourUpdater();