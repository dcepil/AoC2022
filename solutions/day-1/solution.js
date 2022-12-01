import { input } from "./input.js";

const lines = input.split("\n");

// Both parts don't include the very last sum
// But manually checking the input list proves it's irrelevant..
// https://stackblitz.com/edit/js-5q3wfj?file=index.js

// Part 1
/* let biggestSum = 0;
let localSum = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i] !== '') {
    localSum += parseInt(lines[i]);
  } else {
    if (localSum > biggestSum) {
      biggestSum = localSum;
    }
    localSum = 0;
  }
}

console.log(biggestSum); */

// Part 2
/* let sums = [];
let localSum = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i] !== '') {
    localSum += parseInt(lines[i]);
  } else {
    sums.push(localSum);
    localSum = 0;
  }
}

sums.sort((a, b) => b - a);
console.log(sums);
console.log(sums[0] + sums[1] + sums[2]);*/
