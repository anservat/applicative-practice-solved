import { data } from "../data/data";

// SPACE DATA EXERCISE 3
// Return an array of all Planets' average temperatures
// Return example: [1, 2, ... , N]

export function getAllAverageTemperatures(data) {
  const averageTemperatures = [];

  if (data && data.planets) {
    for (const planet of data.planets) {
      if (planet.avgTemp !== undefined) {
        averageTemperatures.push(planet.avgTemp);
      }
    }
  }

  return averageTemperatures;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
