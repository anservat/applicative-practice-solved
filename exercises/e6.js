import { data } from "../data/data";

// SPACE DATA EXERCISE 6
// Return an array with all asteroids names discovered after a given year
// Return example: ['name1', 'name2', ... , 'nameN']

export function getAsteroidsDiscoveredAfterYear(data, year) {
  // Your code goes here...
  // Check if the 'asteroids' property exists in the data
  if (data && data.asteroids) {
    // Use filter to extract asteroids discovered after the given year
    const selectedAsteroids = data.asteroids.filter(asteroid => asteroid.discoveryYear > year);
    // Use map to extract names from each selected asteroid object
    return selectedAsteroids.map(asteroid => asteroid.name);
  } else {
    // Return an empty array if 'asteroids' property is missing
    return [];
  }
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
