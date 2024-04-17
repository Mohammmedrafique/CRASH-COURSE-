const fs = require("fs");

// Function to read a file asynchronously using callbacks
function readFileAsync(filename, callback) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
}

// Function to aggregate data from multiple files using callbacks
function aggregateDataCallback(filenames, callback) {
  let aggregateData = "";

  function readFileCallback(index) {
    if (index === filenames.length) {
      callback(null, aggregateData);
      return;
    }
    const filename = filenames[index];
    readFileAsync(filename, (err, data) => {
      if (err) {
        callback(err, null);
        return;
      }
      aggregateData += data;
      readFileCallback(index + 1);
    });
  }

  readFileCallback(0);
}

// Example usage:
const filenames = ["file1.txt", "file2.txt", "file3.txt"];
aggregateDataCallback(filenames, (err, result) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Aggregated data:", result);
});
