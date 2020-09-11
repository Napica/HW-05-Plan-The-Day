$(document).ready(function () {
  var m = moment();
  $("#currentDay").text(m.format("MMMM Do YYYY"));

  $(".btn").on("click", function (event) {
    var arrayEl = $(this).siblings(".description").val();
    var timeEl = $(this).parent().attr("id");
    console.log(timeEl);
    localStorage.setItem(timeEl, arrayEl);
  });

  var history = localStorage.getItem("hour-9am-block")
  $("#hour-9am-block .description").text(history);

  var history2 = localStorage.getItem("hour-10am-block")
  $("#hour-10am-block .description").text(history2);

  var history3 = localStorage.getItem("hour-11am-block")
  $("#hour-11am-block .description").text(history3);

  var history4 = localStorage.getItem("hour-12pm-block")
  $("#hour-12pm-block .description").text(history4);

  var history5 = localStorage.getItem("hour-1pm-block")
  $("#hour-1pm-block .description").text(history5);

  var history6 = localStorage.getItem("hour-2pm-block")
  $("#hour-2pm-block .description").text(history6);

  var history7 = localStorage.getItem("hour-3pm-block")
  $("#hour-3pm-block .description").text(history7);

  var history8 = localStorage.getItem("hour-4pm-block")
  $("#hour-4pm-block .description").text(history8);

  var history9 = localStorage.getItem("hour-5pm-block")
  $("#hour-5pm-block .description").text(history9);


});
