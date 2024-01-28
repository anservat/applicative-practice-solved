import { data } from "../data/data";

// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithMassValue(data, number) {
  // Your code goes here...
  // Check if the 'planets' property exists in the data
  if (data && data.planets) {
    // Use filter to extract planets with massValue greater or equal to the given number
    const selectedPlanets = data.planets.filter(planet => planet.mass.massValue >= number);
    // Use map to extract names from each selected planet object
    return selectedPlanets.map(planet => planet.name);
  } else {
    // Return an empty array if 'planets' property is missing
    return []; 
  }
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
