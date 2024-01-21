import { data } from "../data/data";

// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

export function getAsteroidDataByName(data, asteroidName) {
  // Your code goes here...
  // Check if the 'asteroids' property exists in the data
  if (data && data.asteroids) {
    // Use find to locate the data object of the given asteroid by name
    const asteroidData = data.asteroids.find(asteroid => asteroid.name === asteroidName);
    
    // Return the data object if found, otherwise return null
    return asteroidData || null;
  } else {
    // Return null if 'asteroids' property is missing
    return null;
  }
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
