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
            
        }
    })
})