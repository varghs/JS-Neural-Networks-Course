const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    // { input: [1, 0], output: [1] },
    // { input: [1, 1], output: [0] }
];

const net =  new brain.NeuralNetwork({ hiddenLayers: [3] });

net.train(trainingData)

console.log('before reinforcement');
console.log(Array.from(net.run([0, 0])));
// test before 1st reinforcement
console.log(Array.from(net.run([1, 0])));
// test before 2nd reinforcement
console.log(Array.from(net.run([1, 1])));

trainingData.push(
    { input: [1, 0], output: [1] }
);

net.train(trainingData)

console.log('after reinforcement');
console.log(Array.from(net.run([0, 0])));
console.log(Array.from(net.run([1, 0])));
// test before 2nd reinforcement
console.log(Array.from(net.run([1, 1])));

// bonus add missing item from training data

trainingData.push(
    { input: [1, 1], output: [0] }
);

net.train(trainingData);

console.log('after 2nd reinforcement');
console.log(Array.from(net.run([0, 0])));
console.log(Array.from(net.run([1, 0])));
console.log(Array.from(net.run([1, 1])));
