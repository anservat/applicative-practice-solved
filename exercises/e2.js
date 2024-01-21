import { data } from "../data/data";

// SPACE DATA EXERCISE 2
// Return an array of all Asteroids' names
// Return example: ['name1', 'name2', ... , 'nameN']

export function getAsteroidNames(data) {
  // Check if the 'asteroids' property exists in the data
  if (data && data.asteroids) {
    // Use map to extract names from each asteroid object
    return data.asteroids.map(asteroid => asteroid.name);
  } else {
    // Return an empty array if 'asteroids' property is missing
    return [];
  }
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
