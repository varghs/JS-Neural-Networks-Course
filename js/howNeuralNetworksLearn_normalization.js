// rawData = [{ open: number, high: number, low: number, close: number }]

function scaleDown(step) { //normalize
  return {
    open: step.open / 138,
    high: step.high / 138,
    low: step.low / 138,
    close: step.close / 138
  };
}

console.log(scaleDown(rawData[0]));

function scaleUp(step) { //denormalize
  return {
    open: step.open * 138,
    high: step.high * 138,
    low: step.low * 138,
    close: step.close * 138
  }
}

console.log(scaleUp(scaleDown(rawData[0])))

// bonus
// open: (step.open - lowest) / (highest - lowest),
// open: (140 - 138) / (147 - 138)
// actually equals:
// 140 - 138 = 2
// 147 - 138 = 9
// 2 / 9 = 0.22222222

function scaleDownNew(step) { //normalize
  return {
    open: (step.open - step.low) / (step.high - step.low),
    high: (step.high - step.low) / (step.high - step.low),
    low: (step.low - step.low) / (step.high - step.low),
    close: (step.close - step.low) / (step.high - step.low)
  };
}

console.log(scaleDownNew(rawData[0]));

function scaleUpNew(step) { //normalize
  return {
    open: (step.open - step.low) * (step.high - step.low),
    high: (step.high - step.low) * (step.high - step.low),
    low: (step.low - step.low) * (step.high - step.low),
    close: (step.close - step.low) * (step.high - step.low)
  };
}

console.log(scaleUpNew(scaleDownNew(rawData[0])))
