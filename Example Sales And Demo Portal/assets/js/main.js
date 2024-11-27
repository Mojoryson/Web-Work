
// Function to open the index page
function openIndexPage() {
  // Redirect to index.html
  window.location.href = '/views/oaiDemo/myprofile.html';
}

// Function to open the Search page
function openSearchPage() {
  // Redirect to search.html
  window.location.href = '/views/oaiDemo/search.html';
}


//Toggle's the Report Tables on the Summary Reports Page. 
function toggleTableDisplay() {
  // Select the button and the tableSummaryReports element
  const searchButton = document.getElementById('searchButton');
  const tableSummaryReports = document.getElementById('tableSummaryReports');

  // Toggle the display property of the tableSummaryReports element
  if (tableSummaryReports.style.display === 'none') {
    tableSummaryReports.style.display = 'block';
  } else {
    tableSummaryReports.style.display = 'none';
  }
}

//Toggle's the Report Tables on the Summary Reports Page.
$(document).ready(function () {
  $('input[data-type="date"]').on('focus', function () {
    $(this).attr('type', 'date');
    $(this).removeAttr('placeholder');
  }).on('blur', function () {
    if (!$(this).val()) {
      $(this).attr('type', 'text');
      $(this).attr('placeholder', 'Select Date');
    }
  });
});


//Function to update the date cells in the tables
function updateDateCells() {
  var dateCells = document.querySelectorAll('td.dateCell');
  dateCells.forEach(function (cell) {
    var currentDate = new Date();
    var randomPastDays = Math.floor(Math.random() * 5);
    currentDate.setDate(currentDate.getDate() - randomPastDays);
    cell.textContent = currentDate.toISOString().split('T')[0];
  });
}
//Call the function to update the date cells
document.addEventListener("DOMContentLoaded", updateDateCells);


//Function to update the time cells in the tables
function updateTimeCells() {
  var timeCells = document.querySelectorAll('td.timeCell');
  timeCells.forEach(function (cell) {
    // Generate a random time between 11AM and 10PM.
    const hour = Math.floor(Math.random() * (22 - 11 + 1)) + 11;
    const minute = Math.floor(Math.random() * 60);
    // Add the AM or PM suffix.
    const amPm = hour < 12 ? 'AM' : 'PM';
    // Format the time string for 12 hour time.
    const formattedTime = `${hour % 12}:${minute} ${amPm}`;
    // Set the textContent of the <td> element to the formatted time string.
    cell.textContent = formattedTime;
 
  });
}
document.addEventListener("DOMContentLoaded", updateTimeCells);

//Call the function to update shadow on all form controls
const allForms = document.querySelectorAll(".form-control");
allForms.forEach(form => {
  form.classList.add("shadow");
});



