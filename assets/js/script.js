// Get the HTML element with the id 'currentDay'
const currentDayElement = document.getElementById('currentDay');

// Use Day.js to get the current date and format it as 'Day of the week, Month Day, Year'
// Update the text content of the 'currentDayElement' with the formetted current date
currentDayElement.textContent = dayjs().format('dddd, MMMM D, YYYY');


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
});

// Function to generate timeblocks and append them to the container
function generateTimeblock() {
    // Get the container element
    const container = document.querySelector('.container');
  
    // Standard business hours (adjust as needed)
    const businessHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];
  
    // Loop through the business hours
    businessHours.forEach(hour => {
      // Create a div element for each timeblock
      const timeblock = document.createElement('div');
      timeblock.classList.add('row', 'time-block');
  
      // Create an element to display the hour
      const hourElement = document.createElement('div');
      hourElement.classList.add('col-md-1', 'hour');
      hourElement.textContent = hour;
  
      // Create an element for user input (textarea)
      const textarea = document.createElement('textarea');
      textarea.classList.add('col-md-8'); // Adjusted column width
      // You can add more attributes or styles to the textarea if needed
  
      // Create a button for saving
      const saveBtn = document.createElement('button');
      saveBtn.classList.add('col-md-2', 'saveBtn', 'ms-auto'); // Adjusted column width and added ms-auto
      saveBtn.innerHTML = '<i class="fas fa-save"></i>'; // You can customize the button icon
  
      // Append elements to the timeblock
      timeblock.appendChild(hourElement);
      timeblock.appendChild(textarea);
      timeblock.appendChild(saveBtn);
  
      // Add an event listener to the timeblock to allow user input
      timeblock.addEventListener('click', function () {
        // Focus on the textarea when the timeblock is clicked
        textarea.focus();
      });
  
      // Append the timeblock to the container
      container.appendChild(timeblock);
    });
  }
  
  // Call the function when the page is loaded
  document.addEventListener('DOMContentLoaded', function () {
    setCurrentDay(); // Set up current day display when the page loads
    generateTimeblock(); // Generate and append timeblocks when the page loads
  
    // Add your other JavaScript code for dynamic functionality here
    // For example, you can add code for handling user interactions, local storage, etc.
  });
  