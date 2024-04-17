const fetch = require("node-fetch");

// Function to make an API call asynchronously using async/await
async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    throw new Error("Error fetching data:", error.message);
  }
}

function displayUserData(userData) {
  userData.forEach((user) => {
    console.log(`Name: ${user.name}`);
    console.log(`Username: ${user.username}`);
    console.log(`Email: ${user.email}`);
    console.log("---");
  });
}

fetchUserData()
  .then((userData) => {
    console.log("User Data:");
    displayUserData(userData);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
