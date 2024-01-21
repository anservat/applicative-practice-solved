import { data } from "../data/data";

// SPACE DATA EXERCISE 9
// Return the data object of the planet "Earth"
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

export function getEarthData(data) {
  // Your code goes here...
  // Check if the 'planets' property exists in the data
  if (data && data.planets) {
    // Use find to locate the data object of the planet "Earth"
    const earthData = data.planets.find(planet => planet.name === 'Earth');
    
    // Return the data object if found, otherwise return null
    return earthData || null;
  } else {
    // Return null if 'planets' property is missing
    return null;
  }
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
