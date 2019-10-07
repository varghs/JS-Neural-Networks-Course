// color preference
const trainingData = [
    { input: { blue: 1 }, output: [1] },
    { input: { red: 1 }, output: [1] },
    { input: { black: 1 }, output: [0] },
    { input: { green: 1 }, output: [0] },
    { input: { brown: 1 }, output: [0] },
];

const net = new brain.NeuralNetwork();

net.train(trainingData);

console.log("before preference change");
console.log(Array.from(net.run({ blue: 1 })));
console.log(Array.from(net.run({ brown: 1 })));

trainingData.pop();
trainingData.push(
    { input: { brown: 1 }, output: [1] }
);

net.train(trainingData);

console.log("after preference change");
console.log(Array.from(net.run({ blue: 1 })));
console.log(Array.from(net.run({ brown: 1 })));

// bonus build your own recommendation engine

const otherTrainingData = [
    { input: { burgers: 1 }, output: [1] },
    { input: { ribs: 1 }, output: [1] },
    { input: { brocolli: 1 }, output: [0] },
    { input: { spinach: 1 }, output: [0] },
    { input: { soup: 1 }, output: [0] }
];

const secondNet = new brain.NeuralNetwork();
// before preference change
secondNet.train(otherTrainingData)

console.log("before preference change for foods");
console.log(Array.from(secondNet.run({ burgers: 1 })));
console.log(Array.from(secondNet.run({ soup: 1 })));

// after preference change

otherTrainingData.pop();
otherTrainingData.push(
    { input: { soup: 1 }, output: [1] }
);

secondNet.train(otherTrainingData)

console.log("after preference change for foods");
console.log(Array.from(secondNet.run({ burgers: 1 })));
console.log(Array.from(secondNet.run({ soup: 1 })));
