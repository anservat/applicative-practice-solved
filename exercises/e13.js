import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  // Your code goes here...
  // Check if the 'planets' property exists in the data
  if (data && data.planets) {
    const planets = data.planets;

    // Use reduce to calculate the sum of temperatures for all planets
    const totalTemperature = planets.reduce((sum, planet) => {
      // Check if 'temperature' property exists for the current planet
      if (planet.temperature !== undefined) {
        return sum + planet.temperature;
      } else {
        // If 'temperature' property is missing, return sum without modification
        return sum;
      }
    }, 0);

    // Calculate the average temperature
    const averageTemperature = totalTemperature / planets.length;

     // Return the average temperature rounded to two decimal places
    return Math.round(averageTemperature * 100) / 100;
  } else {
    // Return null if 'planets' property is missing
    return null;
  }
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
