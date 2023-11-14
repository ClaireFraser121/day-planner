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
        var value = $(this).siblings("textarea").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time, value);
    });

    // Retrieves items from local storage and sets them in proper places
    $(".time-block").each(function () {
        var time = $(this).attr("id").split("-")[1];
        $(this).children("textarea").val(localStorage.getItem(time));
    });
});
$(document).ready(function () {
    // Function to generate timeblocks and append them to the container
    function generateTimeblocks() {
        // Get the container element
        const container = $(".container");

        // Get the current hour using Day.js
        const currentHour = dayjs().hour();

        // Loop through standard business hours
        for (let hour = 9; hour <= 17; hour++) {
            // Create a div element for each timeblock
            const timeblock = $("<div>").addClass("row time-block");

            // Create an element to display the hour
            const hourElement = $("<div>").addClass("col-md-1 hour");
            hourElement.text(dayjs().hour(hour).format("h A"));

            // Create an element for user input (textarea)
            const textarea = $("<textarea>").addClass("col-md-10");

            // Color-code the timeblock based on past, present, or future
            if (hour < currentHour) {
                timeblock.addClass("past");
            } else if (hour === currentHour) {
                timeblock.addClass("present");
            } else {
                timeblock.addClass("future");
            }

            // Retrieve event from local storage and set it in the textarea
            const savedEvent = localStorage.getItem(`event-${hour}`);
            if (savedEvent) {
                textarea.val(savedEvent);
            }

            // Create a button for saving
            const saveBtn = $("<button>").addClass("col-md-1 saveBtn");
            saveBtn.html('<i class="fas fa-save"></i>');

            // Add an event listener to the timeblock to allow user input
            timeblock.on('click', function () {
                // Focus on the textarea when the timeblock is clicked
                textarea.focus();
            });

            // Add an event listener to the save button to save the event in local storage
            saveBtn.on('click', function (event) {
                event.preventDefault();
                const eventText = textarea.val();
                localStorage.setItem(`event-${hour}`, eventText);
            });

            // Append elements to the timeblock
            timeblock.append(hourElement, textarea, saveBtn);

            // Append the timeblock to the container
            container.append(timeblock);
        }
    }

    // Call the function when the page is loaded
    generateTimeblocks();
});
