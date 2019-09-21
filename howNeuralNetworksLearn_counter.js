// Count to 5
// 1-5, 5-1

const trainingData = [
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [6, 7, 8, 9, 10],
  [10, 9, 8, 7, 6]
];

const net = new brain.recurrent.LSTMTimeStep();

net.train(trainingData);

console.log(net.run([1, 2, 3, 4]));
console.log(net.run([5, 4, 3, 2]));

// bonus

// 6-10, 10-6
console.log(net.run([6, 7, 8, 9]));
console.log(net.run([10, 9, 8, 7]));
