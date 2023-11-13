// Get the HTML element with the id 'currentDay'
const currentDayElement = document.getElementById('currentDay');

// Use Day.js to get the current date and format it as 'Day of the week, Month Day, Year'
// Update the text content of the 'currentDayElement' with the formetted current date
currentDayElement.textContent = day.js().format('dddd, MMMM D, YYYY');


// Function to set up the current day display 
function setCurrentDay() {
    const currentDayElement = document.getElementById('currentDay');
    currentDayElement.textContent = dayjs().format('dddd, MMMM D, YYYY');
}

// Call the function when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    setCurrentDay(); // Set up the current day display when the page loads

    // Add your other JavaScript code for dynamic functionality here
    // For example, you can add code for generating timesblocks, handling user interactions, local storage, etc.
})

// Function to generate timeblocks and append them to the container
function generateTimeblock() {
    // Get the container element
    const container = document.querySelector('.container');

    // Standard business hours (adjust as needed)
    const businessHours = ['9 AM', '10AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

    // Loop through the business hours
    businessHours.forEach(hours=> {
        // Create a div element for each timeblock
        const timeblock = document.createElement('div');
        timeblock.classList.add('row', 'time-block');

        // Create an element to display the hour
        
    })
}
