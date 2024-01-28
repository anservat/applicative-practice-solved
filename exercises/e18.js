/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
function maxBy(array, cb) {
  let maxItem = null;
  let maxValue = -Infinity;

  for (const item of array) {
    const value = cb(item);
    if (value > maxValue) {
      maxValue = value;
      maxItem = item;
    }
  }

  return maxItem;
}

function getGreatestDiscoveryYear(data) {
  if (!data || !data.asteroids) {
    return undefined;
  }

  const greatestYear = maxBy(data.asteroids, (yearData) => yearData.discoveries);

  return greatestYear ? greatestYear.year : undefined;
}
module.exports = { maxBy, getGreatestDiscoveryYear };
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
