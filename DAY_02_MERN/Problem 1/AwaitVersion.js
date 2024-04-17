const fs = require("fs").promises;

// Function to read a file asynchronously using async/await
async function readFileAsync(filename) {
  return await fs.readFile(filename, "utf8");
}

// Function to aggregate data from multiple files using async/await
async function aggregateDataAsync(filenames) {
  let aggregateData = "";
  for (const filename of filenames) {
    const data = await readFileAsync(filename);
    aggregateData += data;
  }
  return aggregateData;
}

// Example usage:
const filenames = ["file1.txt", "file2.txt", "file3.txt"];
aggregateDataAsync(filenames)
  .then((result) => {
    console.log("Aggregated data:", result);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
