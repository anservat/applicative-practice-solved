import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  // Check if the 'planets' property exists in the data
  if (data && data.planets) {
    // Use find to locate the planet that has the specified moon
    const planetWithMoon = data.planets.find(planet => planet.moons && planet.moons.includes(moonName));
    
    // Return the planet name if found, otherwise return null
    return planetWithMoon ? planetWithMoon.name : null;
  } else {
    // Return null if 'planets' property is missing
    return null;
  }
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
