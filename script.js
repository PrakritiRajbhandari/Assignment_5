// Display Today's Date
const today = moment();
$("#currentDay").text(moment().format("dddd[,] MMMM Do"));
const test = false;
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
    var row = $(`<div class="row"></div>`);
    $(".container").append(row);
    var time = $(`<div class="col-1 time-block">${hours.amHours[i]}AM</div>`);
    var text = $(
      `<input  type="text" placeholder="Enter your notes here..." class="col-10"   id=${[
        i + "amHours"
      ]}  data-time=${colorChange.amColor[i]}></input>`
    );

    var buttons = $(`<button  class="col-1 saveBtn">Save</button>`);
    $(row).append(time, text, buttons);

    //get the data from local storage
    $('input[type="text"]').each(function() {
      var id = $(this).attr("id");
      $("#" + i + "amHours").val(localStorage.getItem(id));
    });
  }

  //Loop for adding PM hours to .container
  for (var i = 0; i < hours.pmHours.length; i++) {
    var row = $(`<div class="row"></div>`);
    $(".container").append(row);
    var time = $(`<div class="col-1 time-block">${hours.pmHours[i]}PM</div>`);
    var text = $(
      `<input type="text" placeholder="Enter your notes here..." class="col-10" id=${[
        i + "pmHours"
      ]} data-time=${colorChange.pmColor[i]}></input>`
    );
    var buttons = $(`<button id="saveBtn"class="col-1 saveBtn">Save</button>`);
    $(row).append(time, text, buttons);
  }
});

// saves to local storage
// onclick function to listen for user clicks
$(document).on("click", "button", function() {
  alert("saved");

  $('input[type="text"]').each(function() {
    var id = $(this).attr("id");
    var value = $(this).val();
    localStorage.setItem(id, value);
  });
});
