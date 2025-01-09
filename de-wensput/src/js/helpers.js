export function getRandomItems(arr, numItems) {
  // Maak een kopie van de array om mutaties te voorkomen
  let arrCopy = [...arr];

  // Controleer of het aantal gevraagde items niet groter is dan de array-lengte
  if (numItems > arr.length) {
    throw new Error("Het aantal gevraagde items is groter dan de array-lengte.");
  }

  // Schud de array (Fisher-Yates shuffle algoritme)
  shuffle(arrCopy)

  // Retourneer de eerste numItems elementen van de geschudde array
  return arrCopy.slice(0, numItems);
}

export function shuffle(arr) {
  // Fisher-Yates shuffle algoritme
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
