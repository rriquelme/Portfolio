
// Get the current date
const currentDate = new Date();

// Get the current month and year
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

// Function to get the number of days in a month
function getDaysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

// Function to display the calendar
function displayCalendar(month, year) {
  const daysInMonth = getDaysInMonth(month, year);

  // Display the month and year
  console.log(`Calendar for ${month + 1}/${year}`);

  // Display the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    console.log(day);
  }
}

// Display the calendar for the current month
displayCalendar(currentMonth, currentYear);
