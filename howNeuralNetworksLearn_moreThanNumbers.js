const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny’s": "Tuesday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday"
};

// input: { Monday, Tuesday, Wednesday, etc. }
// output: { Restaurant1, Restaurant2, etc. }

const trainingData = [];

for (let restaurantName in restaurants) {
    const dayOfWeek = restaurants[restaurantName];
    trainingData.push({
      input: {[dayOfWeek]: 1},
      output: { [restaurantName]: 1 }
    });
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const stats = net.train(trainingData);

console.log(stats);

console.log(net.run({ 'Monday': 1 }));

function restaurantForDay(dayOfWeek) {
  const result = net.run({ [dayOfWeek]: 1 });
  let highestValue = 0;
  let highestRestaurantName = '';
  for (let restaurantName in result) {
    if (result[restaurantName] > highestValue) {
      highestValue = result[restaurantName];
      highestRestaurantName = restaurantName;
    }
  }

  return highestRestaurantName;
}

console.log(restaurantForDay('Monday'));
console.log(restaurantForDay('Tuesday'));
console.log(restaurantForDay('Wednesday'));
console.log(restaurantForDay('Thursday'));
console.log(restaurantForDay('Friday'));
console.log(restaurantForDay('Saturday'));
console.log(restaurantForDay('Sunday'));

// bonus

// input: { Restaurant1, Restaurant2, etc. }
// output: { Monday, Tuesday, Wednesday, etc. }

const invertedTrainingData = [];

for(let restaurantName in restaurants) {
  const dayOfWeek = restaurants[restaurantName];
    invertedTrainingData.push({
      input: {[restaurantName]: 1},
      output: { [dayOfWeek]: 1 }
    });
}

const invertedNet = new brain.NeuralNetwork({ hiddenLayers: [3] });

const invertedStats = invertedNet.train(invertedTrainingData);

console.log(invertedStats);

console.log(invertedNet.run({ 'Brilliant Yellow Corral': 1 }));

function invertedRestaurantForDay(restaurantName) {
  const invertedResult = invertedNet.run({ [restaurantName]: 1 });
  let invertedHighestValue = 0;
  let highestDayOfWeek = '';
  for (let dayOfWeek in invertedResult) {
    if (invertedResult[dayOfWeek] > invertedHighestValue) {
      invertedHighestValue = invertedResult[dayOfWeek];
      highestDayOfWeek = dayOfWeek;
    }
  }

  return highestDayOfWeek;
}

console.log(invertedRestaurantForDay('Brilliant Yellow Corral'))
console.log(invertedRestaurantForDay('Penny’s'))
console.log(invertedRestaurantForDay('Right Coast Wings'))
console.log(invertedRestaurantForDay('The Delusion Last Railway Car'))
console.log(invertedRestaurantForDay('Fun Day Inn'))
console.log(invertedRestaurantForDay('JHOP'))
console.log(invertedRestaurantForDay('Owls'))
