/**
 * Main function to read data from Google Sheet and create events in Google Calendar
 */
function createEventsFromSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var calendarId = 'your_calendar_id'; // Replace with your calendar ID
  var calendar = CalendarApp.getCalendarById(calendarId);
  
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var title = row[0];
    var startDate = row[1];
    var endDate = row[2];
    var description = row[3];
    
    createEvent(calendar, title, startDate, endDate, description);
  }
}

/**
 * Create a new event in the Google Calendar
 * @param {Calendar} calendar The Google Calendar object
 * @param {string} title The title of the event
 * @param {Date} startDate The start date of the event
 * @param {Date} endDate The end date of the event
 * @param {string} description The description of the event
 */
function createEvent(calendar, title, startDate, endDate, description) {
  var event = calendar.createEvent(title, startDate, endDate, {
    description: description
  });
  Logger.log('Event created: %s', event.getTitle());
}