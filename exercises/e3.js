import { data } from "../data/data";

// SPACE DATA EXERCISE 3
// Return an array of all Planets' average temperatures
// Return example: [1, 2, ... , N]

export function getAllAverageTemperatures(data) {
  // Your code goes here...
  // Check if the 'planets' property exists in the data
  if (data && data.planets) {
    // Use map to extract average temperatures from each planet object
    return data.planets.map(planet => planet.avgTemp);
  } else {
    // Return an empty array if 'planets' property is missing
    return [];
  }
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
