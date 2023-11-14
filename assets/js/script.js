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
            const hourElement = $("<div>").addClass("col-md-1 hour").text(dayjs().hour(hour).format("h A"));

            // Create an element for user input (textarea)
            const textarea = $("<textarea>").addClass("col-md-9");

            // Color-code the timeblock based on past, present, or future
            timeblock.addClass(hour < currentHour ? "past" : (hour === currentHour ? "present" : "future"));

            // Retrieve event from local storage and set it in the textarea
            const savedEvent = localStorage.getItem(`event-${hour}`);
            if (savedEvent) {
                textarea.val(savedEvent);
            }

            // Create a button for saving
            const saveBtn = $("<button>").addClass("col-md-2 saveBtn").html('<i class="fas fa-save"></i>');

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

    // Display the current date at the top of the calendar
    const displayDate = $("#currentDay");
    displayDate.text(dayjs().format("dddd, MMMM D, YYYY"));

    // Call the function when the page is loaded
    generateTimeblocks();

    // Button function to clear local storage and clear contents
    $("#clearFieldBtn").click(function (event) {
        event.preventDefault();
        $("textarea").val("");
        localStorage.clear();
    });
});
