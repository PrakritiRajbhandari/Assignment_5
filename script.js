// Display Today's Date
const today = moment();
$("#currentDay").text(moment().format("dddd[,] MMMM Do"));

$(document).ready(function() {
  //creating the AM array for the hours shown on planner
  var hours = {
    amHours: [8, 9, 10, 11],
    pmHours: [12, 1, 2, 3, 4, 5]
  };

  var colorChange = {
    amColor: [8, 9, 10, 11],
    pmColor: [12, 13, 14, 15, 16, 17]
  };

  // Loop for adding AM hours to .container
  for (var i = 0; i < hours.amHours.length; i++) {
    var row = $(`<div class='row'></div>`);
    $(".container").append(row);
    var time = $(`<div class='col-1 time-block'>${hours.amHours[i]}AM</div>`);
    var text = $(
      `<textarea placeholder="Enter your notes here..." class="col-10" data-time=${colorChange.amColor[i]}></textarea>`
    );
    var buttons = $('<button class="col-1 saveBtn">Save</button>');
    $(row).append(time, text, buttons);
  }

  //Loop for adding PM hours to .container
  for (var i = 0; i < hours.pmHours.length; i++) {
    var row = $(`<div class='row'></div>`);
    $(".container").append(row);
    var time = $(`<div class='col-1 time-block'>${hours.pmHours[i]}PM</div>`);
    var text = $(
      `<textarea  placeholder="Enter your notes here..." class="col-10" id="texts" data-time=${colorChange.pmColor[i]}></textarea>`
    );
    var buttons = $('<button class="col-1 saveBtn">Save</button>');
    $(row).append(time, text, buttons);
  }
});

/*$("#texts").html("");
localStorage.content = $("#texts").html();
$("#texts").html(localStorage.content);*/

// saves to local storage
// conclick function to listen for user clicks on plan area

$(".saveBtn").on("click", function() {
  alert("saved");
});
