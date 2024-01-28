import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  let totalTemperature = 0;
  let planetCount = 0;

  if (data && data.planets) {
    for (const planet of data.planets) {
      if (planet.temperature !== undefined) {
        totalTemperature += planet.temperature;
        planetCount += 1;
      }
    }
  }

  if (planetCount === 0) {
    return null;
  }

  const averageTemperature = totalTemperature / planetCount;
  return Math.round(averageTemperature * 100) / 100;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
