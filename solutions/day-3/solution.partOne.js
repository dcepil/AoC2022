import { lines } from "./input.js";

export const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const sum = lines.reduce((prev, curr) => {
  const firstHalf = Array.from(curr.slice(0, curr.length / 2));
  const secondHalf = Array.from(curr.slice(curr.length / 2, curr.length));
  const intersection = firstHalf
    .filter((l) => secondHalf.includes(l))
    .filter((val, idx, arr) => arr.indexOf(val) === idx);
  return prev + (letters.indexOf(intersection) + 1);
}, 0);

console.log(sum);
