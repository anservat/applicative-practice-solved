import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// include planets with 0 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  // Your code goes here...
  // Check if the 'planets' property exists in the data
  if (data && data.planets) {
    // Use filter to extract planets with less than 10 moons
    const lowMoonsPlanets = data.planets.filter(planet => planet.moonsCount < 10 || planet.moonsCount === 0);
    // Return the names of planets with less than 10 moons
    return lowMoonsPlanets.map(planet => planet.name);
  } else {
    // Return an empty array if 'planets' property is missing
    return [];
  }
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
