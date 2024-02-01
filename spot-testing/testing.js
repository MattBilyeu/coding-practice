let beginning = -Infinity;

let current = 2024;

let failureString;

//Can we arrive at current by adding to negative infinity?

function arriveAtCurrent() {
  while (beginning !== current) {
    beginning = beginning + 1;
    if (beginning === current) {
      return `We did it!!`
    } else {
      if (!failureString) {
        failureString = 'Not yet...';
        console.log(failureString)
      }
    }
  }
}

console.log('Trying to arrive at present from negative infinity ...');

console.log(arriveAtCurrent());

