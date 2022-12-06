import { lines } from "./input.js";
import { letters } from "./solution.partOne.js";

const groups = lines.reduce(
  (prev, curr, idx) =>
    (idx % 3 ? prev[prev.length - 1].push(curr) : prev.push([curr])) && prev,
  []
);
const sum = groups.reduce((prev, curr) => {
  const intersection = curr
    .reduce((a, b) => Array.from(a).filter((c) => b.includes(c)))
    .filter((val, idx, arr) => arr.indexOf(val) === idx);
  return prev + (letters.indexOf(intersection) + 1);
}, 0);

console.log(sum);
