$(document).ready(function () {
    // Day.js code for current date and time
    let NowMoment = dayjs().format("dddd, MMMM D, YYYY");
    let displayDate = $("#currentDay");
    displayDate.text(NowMoment);
    let currentHour = dayjs().format("HH");

    // Button function to clear local storage and clear contents
    $("#clearFieldBtn").click(function (event) {
        event.preventDefault();
        $("textarea").val("");
        localStorage.clear();
    });

    // Grabs hour from each time slot and compares it to actual time
    $(".time-block").each(function () {
        var timeDiv = $(this).attr("id").split("-")[1];

        if (currentHour == timeDiv) {
            $(this).addClass("present");
            $(this).children(".description").addClass("white-text");
        } else if (currentHour < timeDiv) {
            $(this).removeClass("present");
            $(this).addClass("future");
        } else if (currentHour > timeDiv) {
            $(this).removeClass("future");
            $(this).addClass("past")
        }
    });

    // Grabs values from time, value divs and saves them to local storage 
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var value = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time, value);
    });

    // Retrieves items from local storage and sets them in proper places
    $(".time-block").each(function () {
        var time = $(this).attr("id").split("-")[1];
        $(this).children(".time-block").val(localStorage.getItem(time));
    });
});
