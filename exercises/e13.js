import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  if (data && data.planets) {
    const planets = data.planets;
    const totalTemperature = planets.reduce((sum, planet) => {
      if (planet.temperature !== undefined) {
        return sum + planet.temperature;
      } else {
        return sum;
      }
    }, 0);

    const averageTemperature = totalTemperature / planets.length;
    return Math.round(averageTemperature * 100) / 100;
  } else {
    return null;
  }
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
