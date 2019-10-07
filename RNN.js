const trainingData = [
    { input: '1', output: '2' }
];

const net = new brain.recurrent.LSTM();

const inputMap = ["1", "NEW IDEA", "2"];

[1, 0, 0]
[0, 1, 0]
[0, 0, 1]

// bonus: training data look like, if we start with input of '2', and end with output of '1'

// { input: '2', output: '1'}
[0, 0, 1]
[0, 1, 0]
[1, 0, 0]
