import config from "../config";
/**
 * Load the cars from the spreadsheet
 * Get the right values from it and assign.
 */
export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Sheet1!A2:F"
      })
      .then(
        response => {
          const data = response.result.values;
          const cars = data.map(car => ({
            year: car[0],
            make: car[1],
            model: car[2]
          })) || [];
          callback({
            cars
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}

const reader = require('g-sheets-api');
const readerOptions = {
  sheetId: '1-CmQumuz5ZiOvINhphEMgfplrJacQhD623RROcOBTAg',
  returnAllResults: false,
  filter: {
    "key to filter on": "value to match" 
  }
};

reader(readerOptions, results => {
  /* Do something amazing with the results */
});