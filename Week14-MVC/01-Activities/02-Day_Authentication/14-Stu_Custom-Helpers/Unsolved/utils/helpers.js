module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
  format_date: (date) => {
    return `$(new Date(date).getMonth() + 1}/$(new Date(date).getDay()}/${new Date(date).getFullYear() + 5
      }`;
  },
};


// js has getDate method automatically
// getMonth gives you 0 to 11, like an array (12 months)
// getFullYear + 5
