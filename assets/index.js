$(document).ready(function () {
  // section for adding the date to the header
  var m = moment();

  var localDateAndTime = $("#currentDay");
  setInterval(function () {
    var timeLib = moment();
    var digitalTimePull = timeLib.format("MMMM Do YYYY, hh:mm:ss a");
    localDateAndTime.text(digitalTimePull);
  }, 1000);

  // Section for localStorage
  $(".btn").on("click", function () {
    var arrayEl = $(this).siblings(".description").val();
    var timeEl = $(this).parent().attr("id");
    localStorage.setItem(timeEl, arrayEl);
  });

  var hour0900 = $("#hour-9am-block .description");
  var hour1000 = $("#hour-10am-block .description");
  var hour1100 = $("#hour-11am-block .description");
  var hour1200 = $("#hour-12pm-block .description");
  var hour1300 = $("#hour-1pm-block .description");
  var hour1400 = $("#hour-2pm-block .description");
  var hour1500 = $("#hour-3pm-block .description");
  var hour1600 = $("#hour-4pm-block .description");
  var hour1700 = $("#hour-5pm-block .description");

  var history = localStorage.getItem("hour-9am-block");
  hour0900.text(history);

  var history2 = localStorage.getItem("hour-10am-block");
  hour1000.text(history2);

  var history3 = localStorage.getItem("hour-11am-block");
  hour1100.text(history3);

  var history4 = localStorage.getItem("hour-12pm-block");
  hour1200.text(history4);

  var history5 = localStorage.getItem("hour-1pm-block");
  hour1300.text(history5);

  var history6 = localStorage.getItem("hour-2pm-block");
  hour1400.text(history6);

  var history7 = localStorage.getItem("hour-3pm-block");
  hour1500.text(history7);

  var history8 = localStorage.getItem("hour-4pm-block");
  hour1600.text(history8);

  var history9 = localStorage.getItem("hour-5pm-block");
  hour1700.text(history9);

  var momentTime = moment().hour();
  calanderTime();
  function calanderTime() {
    var time0900text = hour0900;
    if (momentTime === 9) {
      time0900text.addClass("present");
    } else if (momentTime < 9) {
      time0900text.addClass("future");
    } else {
      time0900text.addClass("past");
    }
    var time1000text = hour1000;
    if (momentTime === 10) {
      time1000text.addClass("present");
    } else if (momentTime < 10) {
      time1000text.addClass("future");
    } else {
      time1000text.addClass("past");
    }
    var time1100text = hour1100;
    if (momentTime === 11) {
      time1100text.addClass("present");
    } else if (momentTime < 11) {
      time1100text.addClass("future");
    } else {
      time1100text.addClass("past");
    }
    var time1200text = hour1200;
    if (momentTime === 12) {
      time1200text.addClass("present");
    } else if (momentTime < 12) {
      time1200text.addClass("future");
    } else {
      time1200text.addClass("past");
    }
    var time1300text = hour1300;
    if (momentTime === 13) {
      time1300text.addClass("present");
    } else if (momentTime < 13) {
      time1300text.addClass("future");
    } else {
      time1300text.addClass("past");
    }
    var time1400text = hour1400;
    if (momentTime === 14) {
      time1400text.addClass("present");
    } else if (momentTime < 14) {
      time1400text.addClass("future");
    } else {
      time1400text.addClass("past");
    }
    var time1500text = hour1500;
    if (momentTime === 15) {
      time1500text.addClass("present");
    } else if (momentTime < 15) {
      time1500text.addClass("future");
    } else {
      time1500text.addClass("past");
    }
    var time1600text = hour1600;
    if (momentTime === 16) {
      time1600text.addClass("present");
    } else if (momentTime < 16) {
      time1600text.addClass("future");
    } else {
      time1600text.addClass("past");
    }
    var time1700text = hour1700;
    if (momentTime === 17) {
      time1700text.addClass("present");
    } else if (momentTime < 17) {
      time1700text.addClass("future");
    } else {
      time1700text.addClass("past");
    }
  }
});
