import { data } from "../data/data";

// SPACE DATA EXERCISE 15
// Return an array of Planets' names without moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithNoMoons(data) {
  // Your code goes here...
  if (data && data.planets) {
    // Use filter to get planets without moons
    const planetsWithNoMoons = data.planets.filter((planet) => !planet.moons || planet.moons.length === 0);

    // Extract and return the names of planets without moons
    return planetsWithNoMoons.map((planet) => planet.name);
  }

  // Return an empty array if 'planets' property is missing
  return [];  
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
