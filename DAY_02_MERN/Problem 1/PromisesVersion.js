const fs = require("fs").promises;

// Function to read a file asynchronously using promises
function readFileAsync(filename) {
  return fs.readFile(filename, "utf8");
}

// Function to aggregate data from multiple files using promises
function aggregateDataPromise(filenames) {
  return Promise.all(filenames.map((filename) => readFileAsync(filename))).then(
    (dataArray) => dataArray.join("")
  );
}

// EU
const filenames = ["file1.txt", "file2.txt", "file3.txt"];
aggregateDataPromise(filenames)
  .then((result) => {
    console.log("Aggregated data:", result);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
